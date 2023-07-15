// import {getPageComponents} from '@/utils/api/page'

async function getData() {
  const res = await fetch('http://localhost:3000/api/date', {
    next: {tags: ['date']}
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
