import 'dotenv/config'
import {pool, query} from './share/db-connect'

const locale = process.env.STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE
const localesToTranslate = ['fr']
const attributeWithComponents = ['dynamiczone', 'component']
// const localesToTranslate = ['fr', 'de']

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

function createRelation() {
  
}

async function translateField(field, object, contentType, entityId, locale) {
  if (['string', 'text', 'richtext'].includes(field.type)) {
    object[field.field] = `${locale} -> ${object[field.field]}`
  }
  else if (['dynamiczone', 'component'].includes(field.type)) {
    const defaultComponents = await query(
      `SELECT * FROM ${contentType}_components WHERE entity_id = '${entityId}';`
    ) as unknown as Array<Record<string, unknown>>
    await Promise.all(defaultComponents.map(async (component) => {
      const translatedComponent = await translateComponent(component, locale)
      delete component.id
      component.component_id = translatedComponent.id
      component.entity_id = object.id
      await insert(`${contentType}_components`, component)
    }))
  } else if (field.type === 'relation') {
    console.log(contentType)
    const target = field.target.split('.')[1]
    const defaultLinks = await query(
      `SELECT * FROM ${contentType}_${field.field}_links WHERE ${target}_id = '${entityId}';`
    ) as unknown as Array<Record<string, unknown>>
    console.log(defaultLinks)
    await Promise.all(defaultLinks.map(async (link) => {
      const localizedLinks = await query(
        `SELECT * FROM ${field.field}_links WHERE ${target}_id = '${link.related_entity_id}';`
      ) as unknown as Array<Record<string, unknown>>
      if (localizedLinks.length > 0) {
        
      } else {
        await createRelation()
      }
      // const translatedLink = await translateLink(link, locale)
      // delete link.id
      // link.entity_id = object.id
      // link.related_entity_id = translatedLink.id
      // await insert(`${contentType}_links`, link)
    }))
  }
}

async function translateComponent(component, locale) {
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
  // console.log(normalFields)
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
  const keysToString = Object.keys(object).map(key => JSON.stringify(key)).join(',')
  const valueIndexes = Object.keys(object).map((_, index) => `$${index+1}`).join(',')
  // console.log(`INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes})`, Object.values(object))
  return object
  // return (await query(`INSERT INTO ${tableName}(${keysToString}) VALUES(${valueIndexes}) RETURNING *`, Object.values(object)))[0]
}

async function translateContentType(contentType: string) {
  const schema = await import(`../src/api/${contentType}/content-types/${contentType}/schema.json`)
  const contentTypes = await query(`SELECT * FROM ${contentType}s WHERE locale = '${locale}';`)
  await Promise.all(
    [contentTypes[0]].map(async (item) => {
      return await Promise.all(
        localesToTranslate.map(async (locale) => {
          const translated = await translate(schema, item, `${contentType}s`, locale)
          const link =  {
            [`${contentType}_id`]: item.id,
            [`inv_${contentType}_id`]: translated.id
          }
          await insert(`${contentType}s_localizations_links`, link)

        })
      )
    })
  )
}

(async () => {
  const client = await pool.connect()
  // await updateConfigs(size)
  await translateContentType('service')
  await client.release()
  await pool.end()
})()
