import 'dotenv/config'
// import {globSync} from 'glob'
import {pool, query} from './share/db-connect'

const attributeWithComponents = ['component', 'dynamiczone']

async function checkIfComponentIsUsed(contentType: string, componentType: string, entityId: number) {
  const components = await query(`
    SELECT * FROM ${contentType}s_components 
    WHERE component_type = '${componentType}'
    AND entity_id = ${entityId}
  `) as unknown as unknown[]
  return components.length > 0
}

async function getAllContentTypeItems(contentType: string) {
  const items = await query(`
    SELECT * FROM ${contentType}s
  `) as unknown as unknown[]
  return items
}

async function getAllContentTypeLocalizationsLinks(contentType: string) {
  const items = await query(`
    SELECT * FROM ${contentType}s_localizations_links
  `) as unknown as unknown[]
  return items
}

async function handleComponent(component, path) {
  const name = component.split('.')
  const schema = await import(`../src/components/${name[0]}/${name[1]}.json`)
  // console.log('🤯', schema)
  await addMissingRelations(schema, `${path}/${schema.collectionName}`)
}

async function handleAttributesThatCanContainComponents(attribute, path) {
  if (attribute.type === 'dynamiczone') {
    await Promise.all(attribute.components.map(async (component: string) => {
      await handleComponent(component, path)
    }))
  } else if (attribute.type === 'component') {
    await handleComponent(attribute.component, path)
  }
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
  }))).filter(comp => comp !== null)
  // const componentsWithRelations = components.filter(comp => comp.component_type === 'article')
  // console.log(componentsWithRelations)
}

async function getGroupedItems(contentType: string) {
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


async function addMissingRelations(schema) {
  const contentType = 'service'
  const attributes = Object.keys(schema.attributes)
  const groupedItems = await getGroupedItems(contentType)
  // const item = items[0]
  console.log(groupedItems)
  await Promise.all((await filterByComponentsThatHaveRelations(await getItemComponents(contentType, groupedItems[0].default.id))).map(async comp => {
    const defaultComponentId = (await query(`
      SELECT * FROM ${contentType}s_components
      WHERE entity_id = ${groupedItems[0].default.id}
      AND component_type = '${comp.comp.component_type}' 
    `) as unknown as unknown[])[0]
    // console.log(defaultComponentId)
    const localeComponentId = (await query(`
      SELECT * FROM ${contentType}s_components
      WHERE entity_id = ${groupedItems[0].localizations[0].id}
      AND component_type = '${comp.comp.component_type}' 
    `) as unknown as unknown[])[0]
    // console.log(localeComponentId)

    const relations = Object.keys(comp.schema.attributes).filter((attr: string) => comp.schema.attributes[attr].type === 'relation')
    const relationGI = await getGroupedItems('solution')
    // console.log(relationGI)
    // GET LINKS
    const compToSnake = comp.comp.component_type.split('.')[1].replaceAll('-', '_')
    // console.log(compToSnake, defaultComponentId.component_id)
    const defaultLinks = await query(`
      SELECT * FROM ${compToSnake}_${relations[0]}_links
      WHERE ${compToSnake}_id = ${defaultComponentId.component_id}
    `) as unknown as unknown[]

    // const 
    console.log(defaultLinks)
    defaultLinks.forEach(link => {
      delete link.id
      console.log(link.solution_id)
      link[`${compToSnake}_id`] = localeComponentId.component_id
      link['solution_id'] = relationGI.find(item => item.default.id === link['solution_id'])?.localizations[0].id
    })
    console.log(defaultLinks)
    // console.log(comp)
    // const originalLinkId = await query(`
    //   SELECT * FROM ${comp.schema.collectionName}
    //   WHERE id = ${comp.comp.component_id}
    // `) as unknown as unknown[]
    // console.log(relations)
    // console.log(comp)
  }))
  // Promise.all((await getItemComponents('service', items[0].id)).map(comp => {
  //   filterByComponentsThatHaveRelations
  // }) )



  // const relations = attributes.filter((attr: string) => schema.attributes[attr].type === 'relation')

  // const componentAttributes = attributes.filter((attr: string) => attributeWithComponents.includes(schema.attributes[attr].type))
  // const pathOfPossibleRelations = getPathOfPossibleRelations(path)
  // console.log('relations', relations)
  
  // if (componentAttributes.length > 0) {
  //   await Promise.all(componentAttributes.map(async (attr: string) => {
  //     // console.log('🚀', schema.attributes[attr])
  //     await handleAttributesThatCanContainComponents(schema.attributes[attr], `${path}/${attr}`)
  //   }))
  // }

  // if (relations.length > 0) {
  //   await Promise.all(relations.map(async (attr: string) => {
  //     // console.log(attr, path)
      
  //   }))
  // }
  // const items = await getAllContentTypeItems(contentType)
  // if (componentAttributes.length > 0) {
  //   await Promise.all(componentAttributes.map(async (attr: string) => {
  //     if (schema.attributes[attr].type === 'dynamiczone') {
  //       const components = schema.attributes[attr].components
  //       await Promise.all(components.map(async (component: string) => {
  //         await handleComponent(component)
  //       }))
  //       // console.log(components[0])
  //       // console.log(contentType, components[0], items[0].id)

  //       // if (await checkIfComponentIsUsed(contentType, components[0], items[0].id)) {
          
  //       // }
  //     }
  //   }))
  // }
}

(async () => {
  const client = await pool.connect()
  const schema = await import('../src/api/service/content-types/service/schema.json')
  await addMissingRelations(schema)
  // await translateContentTypes('solution')
  // await translateContentTypes('team-member')
  // await translateContentTypes('location')
  // await translateContentTypes('home-page')
  // await translateContentTypes('about-page')
  // await translateContentTypes('footer')
  // await translateContentTypes('blog-page')
  // await translateContentTypes('article')
  await client.release()
  await pool.end()
})()
