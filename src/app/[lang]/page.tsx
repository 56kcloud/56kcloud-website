// import {getPageComponents} from '@/utils/api/page'
// import {HeaderProps} from '@/components/organisms/header/header'
import {getSingleTypeProps} from '@/utils/api/single-type'
// import {usePathname} from 'next/navigation'
import {headers} from 'next/headers'
// import {useRouter} from 'next/navigation'

export default async function Home() {
  // const path = usePathname()
  // const router = useRouter()
  const headersList = headers()
  const host = headersList.get('host') || ''
  console.log(host)
  const header = await getSingleTypeProps(host)
  // return await getPageComponents(params.lang)
  return (
    <div>
      {JSON.stringify(header)}
    </div>
  )
}