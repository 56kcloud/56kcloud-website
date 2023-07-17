// import {getPageComponents} from '@/utils/api/page'
// import {HeaderProps} from '@/components/organisms/header/header'
// import {getSingleTypeProps} from '@/utils/api/single-type'
// import {usePathname} from 'next/navigation'
// import {headers} from 'next/headers'
// import {useRouter} from 'next/navigation'

// export const dynamic = 'force-dynamic'
// export const tags = ['strapi']

export default async function Home() {
  // const path = usePathname()
  // const router = useRouter()
  // const headersList = headers()
  // const host = '56k-cloud-git-migrate-to-strapi-edeltech.vercel.app'
  const host = 'localhost:3000'
  // console.log(host)
  const res  = await fetch(`http://${host}/api/date`)
  const header = await res.json()
  // const header = await getSingleTypeProps(host)
  // return await getPageComponents(params.lang)
  return (
    <div>
      TEST
      {JSON.stringify(header)}
    </div>
  )
}
