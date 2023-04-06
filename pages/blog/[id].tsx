import {Client} from '@notionhq/client'
import {NotionPageRenderer, retrieveBlocksChildren} from 'notion-to-tailwind'
import {notionKey} from '../../config'
const notion = new Client({auth: notionKey})

export default function Post ({post, blocks}) {
  return (<div className='flex flex-col items-center justify-center max-w-full mt-8 prose'>
    <h1>{post?.properties.name.title[0].text.content}</h1>
    <div className='w-4/5 p-8 border rounded-xl'>
      <NotionPageRenderer blocks={blocks} />
    </div>
  </div>)
}

export async function getStaticPaths() {
  return {paths: [], fallback: true}
}

export async function getStaticProps(props) {
  const postId = props.params.id
  const [post, children] = await Promise.all([
    notion.pages.retrieve({page_id: postId}),
    notion.blocks.children.list({block_id: postId})
  ])
  const blocks = children.results
  await retrieveBlocksChildren(notion, blocks)
  return {
    props: {
      post,
      blocks
    },
    revalidate: 3600
  }
}
