// import {Client} from '@notionhq/client'
// import {NotionPageRenderer, retrieveBlocksChildren} from 'notion-to-tailwind'
// import {notionKey} from '../../../config'

import {NotionPageRenderer} from 'notion-to-tailwind'
import {promises as fs} from 'fs'
import path from 'path'

// const notion = new Client({auth: notionKey})

export default function Post({post, blocks}) {
  // console.log(JSON.parse(post))
  console.log(post)
  console.log(blocks)
  return (
    // <div className='flex flex-col items-center justify-center max-w-full mt-8 prose'>
    //   <h1>{post?.properties.name.title[0].text.content}</h1>
    //   <div className='w-4/5 max-w-4xl p-8 border rounded-xl'>
    //     <NotionPageRenderer blocks={blocks}/>
    //   </div>
    // </div>
  )
}

export async function getServerSideProps(context) {
  const postSlug = context.query.id
  const props = JSON.parse(await fs.readFile(path.join(process.cwd(), `data/blog/${postSlug}.json`), 'utf8'))
  return {
    props
  }
}
