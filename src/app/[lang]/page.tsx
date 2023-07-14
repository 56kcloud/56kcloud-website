import {getPageComponents} from '@/utils/api/page'

export default async function Home() {
  const components = await getPageComponents('en')
  return <>
    {components}
  </>
}
