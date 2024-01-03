import {CollectionItem} from '@/models/collection.model'
import {ComponentBlueprint, componentBlueprints} from './renderer/components'
import {PageComponents, PageSeo} from '@/models/page.model'
import {draftMode} from 'next/headers'
import {snakeCaseObjectKeysToCamelCase} from '../toolbox'
import {strapiFetcher} from '../../../configs/server'

export async function getPageComponents(path: string, lang = 'en'): Promise<PageComponents | undefined> {
  const {isEnabled} = draftMode()
  const res = await strapiFetcher.call({
    path: `/api/${path}?locale=${lang}${isEnabled ? '&preview=true' : ''}`
  })
  const element = res
  const availableComponents = element.body.filter((item: Record<string, string>) =>
    Object.keys(componentBlueprints).includes(item.__component.split('.')[1])
  )
  const components = await Promise.all(
    availableComponents.map(async (component: Record<string, string>) => {
      const key = component.__component.split('.')[1] as keyof typeof componentBlueprints
      return {
        component: key,
        props: snakeCaseObjectKeysToCamelCase(component)
      } as ComponentBlueprint
    })
  )
  return components
}

export async function getPageSeo(path: string, lang = 'en'): Promise<PageSeo | undefined> {
  try {
    const res = await strapiFetcher.call({
      path: `/api/${path}?seoOnly=true&locale=${lang}`
    })
    const element = res.data?.attributes || res
    return snakeCaseObjectKeysToCamelCase(element.seo) as PageSeo
  } catch (e) {
    return undefined
  }
}

export async function getList(collection: string): Promise<Array<CollectionItem>> {
  return (await strapiFetcher.call({
    path: `/api/${collection}-slugs`
  })) as Array<CollectionItem>
}
