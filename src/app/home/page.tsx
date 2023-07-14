import {getPageComponents} from '@/utils/api/page'

export default async function Home() {
  const components = await getPageComponents()
  console.log(components)
  return <>
    {components}
    {/* {params.lang} */}
  </>
}
