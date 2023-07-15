// import {getPageComponents} from '@/utils/api/page'
import {HeaderProps} from '@/components/organisms/header/header'
import {getData} from '@/utils/api/page'
import {getSingleTypeProps} from '@/utils/api/single-type'

export default async function Home() {
  const data = await getData()
  const headerProps = (await getSingleTypeProps('header', 'en')) as HeaderProps //NEED TO IMPROVE THIS
  console.log(headerProps)
  // return await getPageComponents(params.lang)
  return <div>
    {data.now}
    {JSON.stringify(headerProps.links)}
  </div>
}
