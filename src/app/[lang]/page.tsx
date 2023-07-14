import {getPageComponents} from '@/utils/api/page'

export default async function Home({params: {lang}}) {
  const components = await getPageComponents(lang)
  return <>
    {components}
  </>
}
