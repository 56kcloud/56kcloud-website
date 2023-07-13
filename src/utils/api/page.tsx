import {components} from '@/data/components'
import {getSingleTypeProps} from './single-type'
import {strapiFetcher} from '../../../config'

export async function getPageComponents(lang: string) {
  const res = await strapiFetcher.call(
    {
      path: `/api/page/home?populate=deep&locale=${lang}`,
      method: 'GET'
    }
  )
  const t: Array<unknown> = res.body.filter((item) => Object.keys(components).includes(item.__component.split('.')[1]))
  const footer = await getSingleTypeProps('footer', lang)
  if (t[t.length - 1].__component.split('.')[1].includes('footer')) {
    t[t.length - 1] = {...footer, ...t[t.length - 1]}
  } else {
    t.push({...footer, __component: 'footer.footer'})
  }
  return t.map((item) => {
    const key = item.__component.split('.')[1]
    const Comp = components[key].component
    const props = getPropsFromNestedObjects(components[key].props, item)
    console.log('TEST3', props)

    return <Comp
      key={item.id}
      {...props}
    />
  })
}

export function getPropsFromNestedObjects(schema, object) {
  const temp = {}
  Object.keys(schema).forEach(key => {
    if (typeof (schema[key]) !== 'object') {
      if (schema[key].includes('url:') && !object[key]?.includes('http')) {
        temp[key] = new URL(object['url'], strapiFetcher.baseUrl).href
      } else {
        temp[key] = object[key]
      }
    } else if (Array.isArray(schema[key])) {
      let array = object[key].data || object[key]
      temp[key] = array.map((item) => getPropsFromNestedObjects(schema[key][0], item.attributes || item))
    } else {
      temp[key] = getPropsFromNestedObjects(schema[key], object[key].data?.attributes || object[key] )
    }
  })
  return temp
}
