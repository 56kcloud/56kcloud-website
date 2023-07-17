// import {Fetcher} from '@/models/fetcher.model'
// import {components} from '@/utils/api/components'
// import {getPropsFromNestedObjects} from './page'
// import {strapiAPI, strapiAPIToken} from '../../../config'
// import next from 'next/types'
// import {strapiFetcher} from '../../../config'


export async function getSingleTypeProps(path) {
  console.log(path)
  const res  = await fetch(`https://${path}/api/date`, {
    next: {tags: ['strapi']}
  })
  return res.json()
  // const strapiFetcher = new Fetcher(strapiAPI, {Authorization: `Bearer ${strapiAPIToken}`})
  // const res = await strapiFetcher.call(
  //   {
  //     path: `/api/${component}?populate=deep&locale=${lang}`,
  //     method: 'GET'
  //   }
  // )
  // const test = await fetch(`${strapiAPI}/api/${component}?populate=deep&locale=${lang}`, {
  //   method: 'GET',
  //   headers: {
  //     Authorization: `Bearer ${strapiAPIToken}`
  //   },
  //   next: {tags: ['strapi']}
  // })
  // const res = await test.json()
  // return await getPropsFromNestedObjects(components[component].props, res.data.attributes)
  // console.log(path)

  // return {}
}
