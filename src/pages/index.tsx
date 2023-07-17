// import {getPageComponents} from '@/utils/api/page'
import {getSingleTypeProps} from '@/utils/api/single-type'

export default function Home({header}) {
  return (
    <div className='text-red-500'>
      {/* {components} */}
      {JSON.stringify(header)}
    </div>
  )
}

export async function getStaticProps() {
  // const host = 'https://56k-cloud-git-migrate-to-strapi-edeltech.vercel.app'
  // const host = 'http://localhost:3000'
  // console.log(host)
  // const res  = await fetch(`${host}/api/date`)
  const header = await getSingleTypeProps('header', 'en')
  // const components = await getPageComponents('en')
  console.log(header)
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      header
    }
  }
}
