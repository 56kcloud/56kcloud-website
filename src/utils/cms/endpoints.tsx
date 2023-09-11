import {components} from './components'
import {getPropsFromNestedObjects} from './page'
import {strapiFetcher} from '../../../config'

export async function getPageComponentsProps(path = '/', lang: string) {
  try {
    const res = await strapiFetcher.call(
      {
        path: `/api/page/path/${btoa(path)}?locale=${lang}`,
        method: 'GET'
      }
    )
    const pageComponents = res.body.filter((item) => Object.keys(components).includes(item.__component.split('.')[1]))
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
    console.log(error)
  }
}
