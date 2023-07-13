import {components} from '@/data/components'
import {getPropsFromNestedObjects} from './page'
import {strapiFetcher} from '../../../config'

export async function getSingleTypeProps(component, lang: string) {
  const res = await strapiFetcher.call(
    {
      path: `/api/${component}?populate=deep&locale=${lang}`,
      method: 'GET'
    }
  )
  return getPropsFromNestedObjects(components[component].props, res.data.attributes)
}
