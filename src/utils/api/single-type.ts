import {Fetcher} from '@/models/fetcher.model'
import {components} from '@/utils/api/components'
import {getPropsFromNestedObjects} from './page'
import {strapiAPI, strapiAPIToken} from '../../../config'

export async function getSingleTypeProps(component, lang) {
  const strapiFetcher = new Fetcher(strapiAPI, {Authorization: `Bearer ${strapiAPIToken}`})
  const res = await strapiFetcher.call(
    {
      path: `/api/${component}?populate=deep&locale=${lang}`,
      method: 'GET'
    }
  )
  return await getPropsFromNestedObjects(components[component].props, res.data.attributes)
}
