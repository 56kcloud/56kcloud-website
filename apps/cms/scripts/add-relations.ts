/* eslint-disable @typescript-eslint/no-explicit-any */
import 'dotenv/config'
import {pool, query} from './share/db-connect'

function camelToSnake(str: string) {
  return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
}

function cleanUpObject(object: object) {
  const keysToDelete = ['id', 'created_at', 'updated_at', 'published_at']
  keysToDelete.forEach((key) => {
    delete object[key]
  })
  Object.keys(object).forEach((key) => {
    if (object[key] === null) {
      delete object[key]
    }
  })
  return object
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
}

async function checkIfAlreadyExists(tableName, object) {
  const cleanedObject = cleanUpObject({...object})
  const keysToString = Object.keys(cleanedObject).map(key => key)
  return ((await query(
    `SELECT * FROM ${tableName} WHERE ${keysToString.map((key) => `${key} = ${cleanedObject[key]}`).join(' AND ')}`
  )) as unknown as Array<any>).length > 0
}

async function getAllContentTypeItems(contentType: string) {
  const items = await query(`
    SELECT * FROM ${contentType}s
  `) as unknown as any[]
  return items
}

async function getAllContentTypeLocalizationsLinks(contentType: string) {
  const items = await query(`
    SELECT * FROM ${contentType}s_localizations_links
  `) as unknown as any[]
  return items
}
async function getItemComponents(contentType: string, entityId: number) {
  return await query(`
    SELECT * FROM ${contentType}s_components 
    WHERE entity_id = ${entityId}
  `) as unknown as any[]
}

function schemaWithRelationAttributes(schema) {
  const attributes = Object.keys(schema.attributes)
  return attributes.some((attr: string) => schema.attributes[attr].type === 'relation')
}

async function filterByComponentsThatHaveRelations(components: any[]) {
  return (await Promise.all(components.map(async comp => {
    const name = comp.component_type.split('.')
    const schema = await import(`../src/components/${name[0]}/${name[1]}.json`)
    return schemaWithRelationAttributes(schema) ? {
      schema,
      comp
    } : null
  }))).filter(comp => comp !== null) as Array<{schema: any, comp: any}>
}

async function getGroupedItems(contentType: string) {
  contentType = contentType.replaceAll('-', '_')
  const items = await getAllContentTypeItems(contentType)
  // console.log(items)
  const localizationsLinks = await getAllContentTypeLocalizationsLinks(contentType)
  const groupedItems = items.filter(item => item.locale === 'en').map(item => {
    return {
      default: item,
      localizations: localizationsLinks
        .filter(link => link[`${contentType}_id`] === item.id)
        .map(link => items.find(item => link[`inv_${contentType}_id`] === item.id))
    }
  })
  return groupedItems
}

async function addMissingRelations(contentType: string) {
  const groupedItems = await getGroupedItems(contentType)
  await Promise.all([groupedItems[0]].map(async item => {
    await handleDirectRelations(contentType, item)
    await handleComponentsRelations(contentType, item)
  }))
 
}

async function handleDirectRelations(contentType: string, item: any) {
  const schema = await import(`../src/api/${contentType}/content-types/${contentType}/schema.json`)
  contentType = contentType.replaceAll('-', '_')
  const relations = Object.keys(schema.attributes)
    .filter((attr: string) => schema.attributes[attr].type === 'relation')
  await Promise.all(relations.map(async relation => {
    const target = schema.attributes[relation].target.split('.')[1].replaceAll('-', '_')
    relation = camelToSnake(relation)
    const relationGI = (await getGroupedItems(`${target}`))
    const defaultLinks = await query(`
        SELECT * FROM ${contentType}s_${relation}_links
        WHERE ${contentType}_id = ${item.default.id}
      `) as unknown as any[]
    console.log(defaultLinks)
    if (defaultLinks) {
      await Promise.all(defaultLinks?.map(async link => {
        const linkTargetId = `${contentType === target ? 'inv_' : ''}${target}_id`
        link[`${contentType}_id`] = item.localizations[0]?.id
        link[linkTargetId] = relationGI.find(
          item => item.default.id === link[linkTargetId]
        )?.localizations[0]?.id || undefined
        const tableLinks = `${contentType}s_${relation}_links`
        console.log(link, tableLinks)
        if (Object.values(link).some(value => value === undefined)) {
          console.log(`${contentType} ${item.default.id} link not created because of undefined values!`)
        } else {
          if (await checkIfAlreadyExists(tableLinks, link)) {
            console.log(`${contentType} ${item.default.id} link already exists.`)
          } else {
            await insert(tableLinks, link)
            console.log(`${contentType} ${item.default.id} link created!`)
          }  
        }
      }))
    }
  }))
}

async function handleComponentsRelations(contentType: string, item: any) {
  const componentWithRelations = await filterByComponentsThatHaveRelations(
    await getItemComponents(contentType, item.default.id)
  )
  await Promise.all(componentWithRelations.map(async component => {
    const defaultComponentId = (await query(`
        SELECT * FROM ${contentType}s_components
        WHERE entity_id = ${item.default.id}
        AND component_type = '${component.comp.component_type}' 
      `) as unknown as any[])[0]
    await Promise.all(item.localizations.map(async localization => {
      const localeComponentId = (await query(`
          SELECT * FROM ${contentType}s_components
          WHERE entity_id = ${localization.id}
          AND component_type = '${component.comp.component_type}' 
        `) as unknown as any[])[0]
      const relations = Object.keys(component.schema.attributes)
        .filter((attr: string) => component.schema.attributes[attr].type === 'relation')
      const target = component.schema.attributes[relations[0]].target.split('.')[1]
      const relationGI = await getGroupedItems(`${target}`)
      const compToSnake = component.comp.component_type.split('.')[1].replaceAll('-', '_')
      const defaultLinks = await query(`
        SELECT * FROM ${compToSnake}_${relations[0]}_links
        WHERE ${compToSnake}_id = ${defaultComponentId.component_id}
      `) as unknown as any[]
      await Promise.all(defaultLinks.map(async link => {
        link[`${compToSnake}_id`] = localeComponentId.component_id
        link[`${target}_id`] = relationGI.find(item => item.default.id === link[`${target}_id`])?.localizations[0].id
        const tableLinks = `${compToSnake}_${relations[0]}_links`
        if (await checkIfAlreadyExists(tableLinks, link)) {
          console.log(`${contentType} ${item.default.id} component link already exists.`)
        } else {
          await insert(tableLinks, link)
          console.log(`${contentType} ${item.default.id} component link created!`)
        }
      }))
    }))
  }))
}

(async () => {
  const client = await pool.connect()
  await addMissingRelations('service')
  await client.release()
  await pool.end()
})()
