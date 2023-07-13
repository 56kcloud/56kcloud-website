import {getPageComponents} from '@/utils/api/page'

export default async function Home({params: {lang}}) {
  return await getPageComponents(lang)
}
