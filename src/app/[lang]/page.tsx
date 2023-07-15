// import {getPageComponents} from '@/utils/api/page'
import {getData} from '@/utils/api/page'

export default async function Home() {
  const data = await getData()
  // return await getPageComponents(params.lang)
  return <div>
    {data.now}
  </div>
}
