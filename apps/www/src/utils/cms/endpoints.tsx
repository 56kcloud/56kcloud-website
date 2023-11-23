import {PageComponents, PageSeo, Seo} from '@/models/page.model'
import {componentBlueprints} from './renderer/components'
import {getComponentProps} from './renderer/parser'
import {seoBlueprint} from './renderer/blueprints'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'
import {strapiFetcher} from '../../../configs/server'

export async function getPageComponents(path: string, lang='en'): Promise<PageComponents|undefined> {
  const res = await strapiFetcher.call({
    path: `/api/${path}?locale=${lang}`
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
  
  return components
}

export async function getPageSeo(path: string, lang='en'): Promise<PageSeo|undefined> {
  const res = await strapiFetcher.call({
    path: `/api/${path}?seoOnly=true&locale=${lang}`
  })
  const element = res.data?.attributes || res
  const seo = await getComponentProps(
    seoBlueprint.props,
    snakeCaseObjectKeysToCamelCase(element.seo)
  ) as Seo
  return seo
}
