import 'dotenv/config'
import {globSync} from 'glob'
import {pool, query} from './share/db-connect'

const locale = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE
const attributeWithComponents = ['dynamiczone', 'component', 'relation', 'media']
// const localesToTranslate = ['fr', 'de']
const localesToTranslate = ['fr']

function pluralize(str: string) {
  return str.endsWith('s') ? str : `${str}s`
}

function slugify(str: string) {
  return str.toLowerCase().replaceAll(' ', '-').replaceAll('_', '-')
}

function camelCaseToSnakeCase(str: string) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

async function isLocalized(contentType) {
  const schema = await import(`../src/api/${contentType}/content-types/${contentType}/schema.json`)
  return schema.pluginOptions?.i18n?.localized
}

function cleanUpObject(object: object) {
  const keysToDelete = ['id', 'created_at', 'updated_at', 'published_at']
  keysToDelete.forEach((key) => {
    delete object[key]
  })
  return object
}

function getSchemaFields(schema, localized?) {
  const fields = Object.keys(schema)
  const localizedFields = fields
    .filter((field) => localized 
      ? schema[field].pluginOptions?.i18n.localized || attributeWithComponents.includes(schema[field].type) 
      : true)
    .map((field) => ({
      field,
      ...schema[field]
    }))
  return localizedFields
}

async function translateField(field, object, collectionName, name, entityId, locale) {
  if (['string', 'text', 'richtext'].includes(field.type)) {
    const translation = `${locale} -> ${object[field.field]}`
    object[field.field] = field.field === 'slug' ? slugify(translation) : translation
  } else if (['dynamiczone', 'component'].includes(field.type)) {
    const defaultComponents = await query(
      `SELECT * FROM ${collectionName}_components WHERE entity_id = '${entityId}' AND field = '${field.field}';`
    ) as unknown as Array<Record<string, unknown>>
    await Promise.all(defaultComponents.map(async (component) => {
      if (component) {
        const translatedComponent = await translateComponent(component, locale)
        component.component_id = translatedComponent.id
        component.entity_id = object.id
        await insert(`${collectionName}_components`, component)
      }
    }))
  } else if (field.type === 'relation') {
    if (field.field === 'relatedArticles') {
      console.log('FIELD:', field.field)
      const target = field.target.split('.')[1]
      const dbTarget = field.target.split('.')[1].replaceAll('-', '_')
      const targetCollectionName = pluralize(dbTarget)
      const fieldRelation = camelCaseToSnakeCase(field.field)
      const links = await query(
        `SELECT * FROM ${collectionName}_${fieldRelation}_links WHERE ${name}_id = '${entityId}';`
      ) as unknown as Array<Record<string, unknown>>
      console.log('links', links)
      await Promise.all(links.map(async (link) => {
        let linkId
        if (await isLocalized(target)) {
          console.log('HERE', field)
          const alreadyTranslatedTargets = await query(`
            SELECT ${targetCollectionName}.id FROM ${targetCollectionName}
            INNER JOIN ${targetCollectionName}_localizations_links 
            ON ${targetCollectionName}.id = ${targetCollectionName}_localizations_links.inv_${dbTarget}_id 
            WHERE ${targetCollectionName}_localizations_links.${dbTarget}_id = ${link[`${dbTarget}_id`]}
          `) as unknown as Array<Record<string, unknown>>
          console.log('alreadyTranslatedTargets', alreadyTranslatedTargets)
          if (alreadyTranslatedTargets.length > 0) {
            linkId = alreadyTranslatedTargets[0].id
          } else {
            const schema = await import(`../src/api/${target}/content-types/${target}/schema.json`)
            const originalContentType = await query(`
              SELECT * FROM ${targetCollectionName}
              WHERE id = '${link[`inv_${dbTarget}_id`]}';
            `) as unknown as Array<Record<string, unknown>>
            console.log(originalContentType.map(item => item.id))
            console.log(originalContentType)
            const translatedContentType = await translateContentType(
              target,
              targetCollectionName,
              originalContentType[0],
              schema,
              locale
            )
            console.log('✅')
            linkId = translatedContentType.id
          }
        } else {
          linkId = link[`${dbTarget}_id`]
        }
        await insert(`${collectionName}_${fieldRelation}_links`, {
          [`${(name)}_id`]: object.id,
          [`${dbTarget}_id`]: linkId
        })
      }))
    }
  } else if (field.type === 'media') {
    // console.log(slugify(name))
    const path = globSync([
      `./src/**/*/${slugify(name)}.json`,
      `./src/**/*/${slugify(name)}/content-types/${slugify(name)}/schema.json`
    ])[0]
    let related_type
    const pathSplit = path.split('/')
    if (path.includes('components')) {
      related_type = `${pathSplit[2]}.${pathSplit[3].split('.')[0]}`
    } else {
      related_type = `api::${pathSplit[2]}.${pathSplit[4]}`
    }
    const fileMorph = (await query(`
      SELECT * FROM files_related_morphs 
      WHERE related_type = '${related_type}'
      AND related_id = '${entityId}'
      AND field = '${field.field}';
    `))[0]
    fileMorph.related_id = object.id
    await insert('files_related_morphs', fileMorph)
  }
}

async function translateComponent(component, locale) {
  const name = component.component_type.split('.')
  const schema = await import(`../src/components/${name[0]}/${name[1]}.json`)
  const collectionName = schema.collectionName
  let translatedComponent = (await query(
    `SELECT * FROM ${collectionName} WHERE id = '${component.component_id}';`
  ))[0]
  translatedComponent = await translate(
    name[1].replaceAll('-', '_'),
    collectionName,
    schema,
    translatedComponent,
    locale,
    true
  )
  return translatedComponent
}

async function translate(name, collectionName, schema, object, locale, isComponent = false) {
  let translatedObject = cleanUpObject({...object}) as Record<string, unknown>
  const fieldsToTranslate = getSchemaFields(schema.attributes, !isComponent)
  const normalFields = fieldsToTranslate.filter((field) => !attributeWithComponents.includes(field.type))
  const componentFields = fieldsToTranslate.filter((field) => attributeWithComponents.includes(field.type))
  console.log(fieldsToTranslate)
  await Promise.all(normalFields.map(async (field) => {
    await translateField(field, translatedObject, collectionName, name, object.id, locale)
  })) 
  !isComponent && (translatedObject.locale = locale)
  translatedObject = await insert(collectionName, translatedObject)
  if (componentFields.length > 0) {
    await Promise.all(componentFields.map(async (field) => {
      await translateField(field, translatedObject, collectionName, name, object.id, locale)
    }))
  }
  return translatedObject
}

async function insert(tableName, object) {
  const cleanedObject = cleanUpObject({...object})
  const keysToString = Object.keys(cleanedObject).map(key => JSON.stringify(key)).join(',')
  const valueIndexes = Object.keys(cleanedObject).map((_, index) => `$${index+1}`).join(',')
  
  if (keysToString.length === 0) {
    return (await query(`INSERT INTO ${tableName} DEFAULT VALUES RETURNING *`))[0]
  } else {
    return (await query(
      `INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes}) RETURNING *`,
      Object.values(cleanedObject)
    ))[0]
  }
  console.log(`INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes}) RETURNING *`,
    Object.values(cleanedObject))
  // Random betwwen 1 and 100
  object.id = Math.round(Math.random() * 100) + 1
  return object

}

async function isAlreadyTranslated(id, contentType, locale) {
  contentType = contentType.replaceAll('-', '_')
  console.log(`
  SELECT * FROM ${contentType}s 
  INNER JOIN ${contentType}s_localizations_links 
  ON ${contentType}s.id = ${contentType}s_localizations_links.inv_${contentType}_id
  WHERE locale = '${locale}' AND ${contentType}s_localizations_links.${contentType}_id = ${id};
`)
  const localizations = (await query(`
    SELECT * FROM ${contentType}s 
    INNER JOIN ${contentType}s_localizations_links 
    ON ${contentType}s.id = ${contentType}s_localizations_links.inv_${contentType}_id
    WHERE locale = '${locale}' AND ${contentType}s_localizations_links.${contentType}_id = ${id};
  `)) as unknown as Array<Record<string, unknown>>
  return localizations.length > 0
}

async function addRelatedLocalizationLinks(defaultId, translatedId, contentType) {
  console.log('addRelatedLocalizationLinks', defaultId, translatedId, contentType)
  contentType = contentType.replaceAll('-', '_')
  const relatedLinks = await query(`
    SELECT * FROM ${contentType}s_localizations_links
    WHERE ${contentType}_id = '${defaultId}';
  `) as unknown as Array<Record<string, unknown>>
  const relatedLinkIds = [defaultId, ...relatedLinks.map((link) => link[`inv_${contentType}_id`])]
  await Promise.all(relatedLinkIds.map(async (link) => {
    const links = [
      {
        [`${contentType}_id`]: translatedId,
        [`inv_${contentType}_id`]: link
      },
      {
        [`${contentType}_id`]: link,
        [`inv_${contentType}_id`]: translatedId
      }
    ]
    await Promise.all(links.map(async (link) => 
      await insert(`${contentType}s_localizations_links`, link)
    ))
  }))
}

async function translateContentType(name, collectionName, object, schema, locale) {
  if (!await isAlreadyTranslated(object.id, name, locale)) {
    console.log(`Translating ${name} to ${locale}`)
    const translated = await translate(name, collectionName, schema, object, locale)
    await addRelatedLocalizationLinks(object.id, translated.id, name)
    return translated
  } else {
    console.log(`Already translated ${name} to ${locale}`)
    // return await query(`
    //   SELECT * FROM ${collectionName} WHERE id = '${object.id}';
    // `) as unknown as Array<Record<string, unknown>>[0]
  }
}

async function translateContentTypes(contentType: string) {
  const schema = await import(`../src/api/${contentType}/content-types/${contentType}/schema.json`)
  const collectionName = schema.collectionName
  const name = contentType.replaceAll('-', '_')
  const contentTypes = await query(`
    SELECT * FROM ${collectionName} WHERE locale = '${locale}';
  `) as unknown as Array<Record<string, unknown>>
  await Promise.all(
    localesToTranslate.map(async (locale) => (
      Promise.all([contentTypes[0]].map(async (item) =>
        await translateContentType(name, collectionName, item, schema, locale)
      ))
    ))
  )
}

(async () => {
  const client = await pool.connect()
  // await translateContentTypes('tag')
  // await translateContentTypes('solution')
  // await translateContentTypes('team-member')
  // await translateContentTypes('location')
  // await translateContentTypes('home-page')
  // await translateContentTypes('about-page')
  // await translateContentTypes('footer')
  // await translateContentTypes('blog-page')
  await translateContentTypes('article')
  await client.release()
  await pool.end()
})()
