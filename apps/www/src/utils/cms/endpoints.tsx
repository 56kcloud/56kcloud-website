import {PageProps, Seo} from '@/models/page.mode'
import {componentBlueprints} from './renderer/components'
import {getComponentProps} from './renderer/parser'
import {seoBlueprint} from './renderer/blueprints'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'
import {strapiFetcher} from '../../../configs/server'

export async function getPageProps(path='/', lang='en'): Promise<PageProps|undefined> {
  const res = await strapiFetcher.call({
    path: `/api/${path}?populate=deep&locale=${lang}`
  })
  const element = res.data?.attributes || res
  const availableComponents = element.body.filter((item: Record<string, string>) => 
    Object.keys(componentBlueprints).includes(item.__component.split('.')[1])
  )
  const components = await Promise.all(availableComponents.map(async(component: Record<string, string>) => {
    const key = component.__component.split('.')[1] as keyof typeof componentBlueprints
    const componentBlueprint = componentBlueprints[key]
    const props = await getComponentProps(
      componentBlueprint.props,
      snakeCaseObjectKeysToCamelCase(component)
    )
    return {
      component: key,
      props
    }
  }))
  const seo = await getComponentProps(
    seoBlueprint.props,
    snakeCaseObjectKeysToCamelCase(element.seo)
  ) as Seo
  return {
    components,
    seo
  }
}
