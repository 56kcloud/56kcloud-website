// import {getPageComponents} from '@/utils/api/page'
import {HeaderProps} from '@/components/organisms/header/header'
import {getSingleTypeProps} from '@/utils/api/single-type'

export default async function Home({params}: {params: {lang: string}}) {
  const header = await getSingleTypeProps('header', params.lang) as HeaderProps
  // return await getPageComponents(params.lang)
  return (
    <div>
      {JSON.stringify(header.links)}
    </div>
  )
}
