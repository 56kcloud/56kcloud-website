import {Fetcher} from '@/models/fetcher.model'
import {components} from './components'
import {getPropsFromNestedObjects} from './page'
import {strapiAPI, strapiAPIToken, strapiFetcher} from '../../../config'

export async function getPageComponentsProps(page:string, lang: string) {
  try {
    const res = await strapiFetcher.call(
      {
        path: `/api/page/${page}?populate=deep&locale=${lang}`,
        method: 'GET'
      }
    )
    const pageComponents = res.body.filter((item) => Object.keys(components).includes(item.__component.split('.')[1]))
    console.log('TEST', pageComponents)
    const lastItemIndex = pageComponents.length - 1
    const lastItem = pageComponents[lastItemIndex]
    const header = await getSingleTypeProps('header', lang)
    pageComponents.unshift({...header, __component: 'header.header'})
    console.log(header)
    const footer = await getSingleTypeProps('footer', lang)
    if (lastItem.__component.split('.')[1].includes('footer')) {
      pageComponents[lastItemIndex] = {...footer, ...lastItem}
    } else {
      pageComponents.push({...footer, __component: 'footer.footer'})
    }
    for (const itemIndex in pageComponents) {
      const item = pageComponents[itemIndex]
      const key = item.__component.split('.')[1]
      pageComponents[itemIndex] = {
        component: key,
        props: await getPropsFromNestedObjects(components[key].props, item)
      }
    }
    return pageComponents
  } catch (error) {
    console.error(error)
  }
}

export async function getSingleTypeProps(apiName, lang, component=apiName, queryparams=`?populate=deep&locale=${lang}`) {
  const strapiFetcher = new Fetcher(strapiAPI, {Authorization: `Bearer ${strapiAPIToken}`})
  const res = await strapiFetcher.call(
    {
      path: `/api/${apiName}${queryparams}`,
      method: 'GET'
    }
  )
  const componentKey = component.split('/')[0]
  console.log('😅', res.data)
  try {
    return await getPropsFromNestedObjects(components[componentKey].props, res.data?.attributes || res.data || res)
  } catch (error) {
    console.error(error)
    return res
  }
}
