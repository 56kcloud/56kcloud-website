import {Fetcher} from '@/models/fetcher.model'
import {components} from '@/utils/api/components'
import {deepFind} from '../toolbox'
import {getPlaiceholder} from 'plaiceholder'
// import {getSingleTypeProps} from './single-type'
import {strapiAPI, strapiAPIToken} from '../../../config'

export async function getPageComponents(lang: string) {
  const strapiFetcher = new Fetcher(strapiAPI, {Authorization: `Bearer ${strapiAPIToken}`})
  try {
    const res = await strapiFetcher.call(
      {
        path: `/api/page/home?populate=deep&locale=${lang}`,
        method: 'GET'
      }
    )
    const pageComponents = res.body.filter((item) => Object.keys(components).includes(item.__component.split('.')[1]))
    // const header = await getSingleTypeProps('header', lang)
    // pageComponents.unshift({...header, __component: 'header.header'})
    // const footer = await getSingleTypeProps('footer', lang)
    const lastItemIndex = pageComponents.length - 1
    const lastItem = pageComponents[lastItemIndex]
    if (lastItem.__component.split('.')[1].includes('footer')) {
      // pageComponents[lastItemIndex] = {...footer, ...lastItem}
    } else {
      // pageComponents.push({...footer, __component: 'footer.footer'})
    }
    return pageComponents.map((item) => {
      const key = item.__component.split('.')[1]
      const Comp = components[key].component
      return getPropsFromNestedObjects(components[key].props, item).then((props) => 
        <Comp
          key={item.id}
          {...props}
        />)
    })
  } catch (error) {
    console.error(error)
  }
}

export async function getPropsFromNestedObjects(schema, object) {
  const temp = {}
  const keys = Object.keys(schema)
  for (const keyIndex in keys) {
    const key = keys[keyIndex]
    if (typeof (schema[key]) !== 'object') {
      const path = schema[key].split('.')
      const pathFirstKey = path[0]
      path.shift()
      const value = deepFind(object, schema[key]) 
      || deepFind(object, `${pathFirstKey}.data.attributes.${path.join('.')}`)
      || path.splice(path.length - 1, 1, key) && deepFind(object, `${pathFirstKey}.${path.join('.')}`)
      if (key === 'blurDataURL') {
        const res = await fetch(value, {method: 'GET'})
        const buffer = Buffer.from(await res.arrayBuffer())
        const {base64} = await getPlaiceholder(buffer)
        temp[key] = base64
      } else {
        temp[key] = value
      }
    } else if (Array.isArray(schema[key])) {
      let array = object[key].data || object[key]
      temp[key] = []
      for (const itemIndex in array) {
        const item = array[itemIndex]
        temp[key].push(await getPropsFromNestedObjects(schema[key][0], item.attributes || item))
      }
    } else {
      temp[key] = await getPropsFromNestedObjects(schema[key], object)
    }
  }
  return temp
}
