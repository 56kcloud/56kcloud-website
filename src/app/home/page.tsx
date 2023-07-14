// import {getPageComponents} from '@/utils/api/page'

export default async function Home({params}: {params: {lang: string}}) {
  // const components = await getPageComponents(params.lang)
  return <>
    {params.lang}
  </>
}
