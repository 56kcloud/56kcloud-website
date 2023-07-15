import {getPageComponents} from '@/utils/api/page'

export default async function Home({params}: {params: {lang: string}}) {
  return await getPageComponents(params.lang)
}
