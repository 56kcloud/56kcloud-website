// import {getPageComponents} from '@/utils/api/page'

async function getData() {
  const res = await fetch('https://56k-cloud-git-migrate-to-strapi-edeltech.vercel.app/api/date', {
    next: {tags: ['strapi']}
  })
  return res.json()
}

export default async function Home() {
  const data = await getData()
  // return await getPageComponents(params.lang)
  return <div>
    {data.now}
  </div>
}
