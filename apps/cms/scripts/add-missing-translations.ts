import 'dotenv/config'
import {pool, query} from './share/db-connect'

const locale = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE
const localesToTranslate = ['fr']
const attributeWithComponents = ['dynamiczone', 'component', 'relation']
// const localesToTranslate = ['fr', 'de']

function removeTrailingS(str) {
  if (str.endsWith('s')) {
    return str.slice(0, -1)
  }
  return str
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
    .filter((field) => localized ? schema[field].pluginOptions?.i18n.localized : true)
    .map((field) => ({
      field,
      ...schema[field]
    }))
  return localizedFields
}

async function translateField(field, object, contentType, entityId, locale) {
  if (['string', 'text', 'richtext'].includes(field.type)) {
    object[field.field] = `${locale} -> ${object[field.field]}`
  }
  else if (['dynamiczone', 'component'].includes(field.type)) {
    const defaultComponents = await query(
      `SELECT * FROM ${contentType}_components WHERE entity_id = '${entityId}' AND field = '${field.field}';`
    ) as unknown as Array<Record<string, unknown>>
    // console.log('component', component)
    // console.log('field', field)
    // console.log(defaultComponents)
    await Promise.all(defaultComponents.map(async (component) => {
      if (component) {
        const translatedComponent = await translateComponent(component, locale)
        component.component_id = translatedComponent.id
        component.entity_id = object.id
        console.log(contentType)
        await insert(`${contentType}_components`, component)
      }
    }))
  } else if (field.type === 'relation') {
    // console.log('RELATION',)
    const target = field.target.split('.')[1]
    console.log('RELATION', field, object, target, contentType, entityId, locale)
    // GET LINKS
    const links = await query(
      `SELECT * FROM ${contentType}_${target}s_links WHERE ${removeTrailingS(contentType)}_id = '${entityId}';`
    ) as unknown as Array<Record<string, unknown>>
    console.log(links)
    // CHECK IF ALREADY TRANSLATED
    await Promise.all(links.map(async (link) => {
      let linkId
      if (await isLocalized(target)) {
        console.log('IS LOCALIZED')
        const alreadyTranslatedTargets = await query(`SELECT ${target}s.id FROM ${target}s INNER JOIN ${target}s_localizations_links ON ${target}s.id = ${target}s_localizations_links.inv_${target}_id WHERE ${target}s_localizations_links.${target}_id = ${link[`${target}_id`]}`) as unknown as Array<Record<string, unknown>>
        if (alreadyTranslatedTargets.length > 0) {
          console.log(alreadyTranslatedTargets[0])
          linkId = alreadyTranslatedTargets[0].id
        } else {
          const schema = await import(`../src/api/${target}/content-types/${target}/schema.json`)
          const originalContentType = await query(`SELECT * FROM ${target}s WHERE id = '${link[`${target}_id`]}';`) as unknown as Array<Record<string, unknown>>
          const translatedContentType = await translateContentType(target, originalContentType[0], schema, locale)
          console.log(translatedContentType)
          linkId = translatedContentType.id
          // console.log(translatedContentType)
        }
      } else {
        linkId = link[`${target}_id`]
      }
      //   // ADD LINK
      console.log(contentType)
      // await addRelatedLinks(object.id, linkId, target)
      await insert(`${contentType}_${target}s_links`, {
        [`${removeTrailingS(contentType)}_id`]: object.id,
        [`${target}_id`]: linkId
      })
      // console.log()
    }))
  }
}

async function translateComponent(component, locale) {
  console.log(component)
  const name = component.component_type.split('.')
  const schema = await import(`../src/components/${name[0]}/${name[1]}.json`)
  const collectionName = schema.collectionName
  let translatedComponent = (await query(
    `SELECT * FROM ${collectionName} WHERE id = '${component.component_id}';`
  ))[0]
  translatedComponent = await translate(schema, translatedComponent, collectionName, locale, true)
  return translatedComponent
}

async function translate(schema, object, contentType, locale, isComponent = false) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let translatedObject = cleanUpObject({...object}) as Record<string, any>
  const fieldsToTranslate = getSchemaFields(schema.attributes, !isComponent)
  const hasDynamicZone = fieldsToTranslate.some((field) => attributeWithComponents.includes(field.type))
  const normalFields = fieldsToTranslate.filter((field) => !attributeWithComponents.includes(field.type))
  const componentFields = fieldsToTranslate.filter((field) => attributeWithComponents.includes(field.type))
  await Promise.all(normalFields.map(async (field) => {
    await translateField(field, translatedObject, contentType, object.id, locale)
  }))
  !isComponent && (translatedObject.locale = locale)
  translatedObject = await insert(contentType, translatedObject)
  if (hasDynamicZone) {
    await Promise.all(componentFields.map(async (field) => {
      await translateField(field, translatedObject, contentType, object.id, locale)
    }))
  }
  return translatedObject
}

async function insert(tableName, object) {
  const cleanedObject = cleanUpObject({...object})
  const keysToString = Object.keys(cleanedObject).map(key => JSON.stringify(key)).join(',')
  const valueIndexes = Object.keys(cleanedObject).map((_, index) => `$${index+1}`).join(',')
  // Random between 1 and 100
  console.log(`INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes}) RETURNING *`, Object.values(cleanedObject))
  cleanedObject.id = Math.floor(Math.random() * 100) + 1
  return cleanedObject
  // return (await query(`INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes}) RETURNING *`, Object.values(cleanedObject)))[0]
}

async function isAlreadyTranslated(id, contentType, locale) {
  const localizations = (await query(`SELECT * FROM ${contentType}s INNER JOIN ${contentType}s_localizations_links ON ${contentType}s.id = ${contentType}s_localizations_links.inv_${contentType}_id WHERE locale = '${locale}' AND ${contentType}s_localizations_links.${contentType}_id = ${id} ;`)) as unknown as Array<Record<string, unknown>>
  return localizations.length > 0
}

async function addRelatedLocalizationLinks(defaultId, translatedId, contentType) {
  const relatedLinks = await query(`SELECT * FROM ${contentType}s_localizations_links WHERE ${contentType}_id = '${defaultId}';`) as unknown as Array<Record<string, unknown>>
  const relatedLinkIds = [defaultId, ...relatedLinks.map((link) => link[`inv_${contentType}_id`])]
  console.log(relatedLinkIds, defaultId)
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

async function translateContentType(contentType: string, object, schema, locale) {
  if (!await isAlreadyTranslated(object.id, contentType, locale)) {
    console.log(`Translating ${contentType} to ${locale}`)
    const translated = await translate(schema, object, `${contentType}s`, locale)
    await addRelatedLocalizationLinks(object.id, translated.id, contentType)
    return translated
  } else {
    console.log(`Already translated ${contentType} to ${locale}`)
  }
}

async function translateContentTypes(contentType: string) {
  const schema = await import(`../src/api/${contentType}/content-types/${contentType}/schema.json`)
  contentType = contentType.replaceAll('-', '_')
  const contentTypes = await query(`SELECT * FROM ${contentType}s WHERE locale = '${locale}';`)
  await Promise.all(
    localesToTranslate.map(async (locale) => (
      // console.log(`Translating ${contentType} to ${locale}`)
      Promise.all([contentTypes[0]].map(async (item) => await translateContentType(contentType, item, schema, locale)))
    ))
  )
}

(async () => {
  const client = await pool.connect()
  // await translateContentTypes('service')
  // await translateContentTypes('solution')
  // await translateContentTypes('team-member')
  // await translateContentTypes('location')
  await translateContentTypes('home-page')
  await client.release()
  await pool.end()
})()
