import {PageProps} from '@/models/page.mode'
import {componentBlueprints} from './renderer/components'
import {getPropsFromNestedObjects} from './renderer/parser'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'
import {strapiFetcher} from '../../../config'

export async function getPageProps(path='/', lang='en'): Promise<PageProps|undefined> {
  try {
    const res = await strapiFetcher.call(
      {
        path: `/api/${path}?locale=${lang}`,
        method: 'GET'
      }
    )
    const element = res.data?.attributes || res
    const components = element.body.filter((item: Record<string, string>) => 
      Object.keys(componentBlueprints).includes(item.__component.split('.')[1])
    )
    for (const componentIndex in components) {
      const component = components[componentIndex]
      const key = component.__component.split('.')[1] as keyof typeof componentBlueprints
      const componentBlueprint = componentBlueprints[key]
      console.log(key, '📟')
      components[componentIndex] = {
        component: key,
        props: await getPropsFromNestedObjects(
          componentBlueprint.props,
          snakeCaseObjectKeysToCamelCase(component)
        )
      }
    }
    return {
      components,
      layout: element.layout || null,
      openGraph: {
        title: element.title,
        description: element.description,
        image: element.image || null
      }
    }
  } catch (error) {
    console.log(error)
  }
}
