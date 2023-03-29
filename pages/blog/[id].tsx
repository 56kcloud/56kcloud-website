import {GetStaticPaths, GetStaticProps} from 'next'
import {useRouter} from 'next/router'
import Head from 'next/head'

import Date from '../../components/date'
import Layout from '../../components/organisms/layout'

import {getAllPostIds, getPostData} from '../../lib/posts'


import {Client} from '@notionhq/client'
// import {NotionPageRenderer, retrieveBlocksChildren} from 'notion-to-tailwind'
import {NotionPageRenderer, retrieveBlocksChildren} from 'notion-to-tailwind'
import {notionKey} from '../../config'
// import ogs from 'open-graph-scraper'
const notion = new Client({auth: notionKey})





export default function Post ({
  postData
}: {
  postData: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    image: string;
    contentHtml: string;
  };
}) {
  const router = useRouter()
  return (
    <Layout>
      <article className='relative py-16 overflow-hidden bg-white'>
        <div className='relative px-4 sm:px-6 lg:px-8'>
          <div className='mx-auto text-lg max-w-prose'>
            <h1>
              <span className=
                'block mt-2 text-3xl font-extrabold leading-8 tracking-tight text-center text-gray-900 sm:text-4xl'>
                {postData.title}
              </span>
            </h1>
            <div className='mt-3 text-sm text-center'>
              {postData.author}
              <br />
              <Date dateString={postData.date} />
            </div>
          </div>
          <div
            className='mx-auto mt-6 prose prose-lg text-gray-500 prose-blue'
            dangerouslySetInnerHTML={{__html: postData.contentHtml}}
          ></div>
        </div>
      </article>
    </Layout>
  )
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export const getStaticProps: GetStaticProps = async ({params}) => {
//   const postData = await getPostData(params.id as string)
//   return {
//     props: {
//       postData
//     }
//   }
// }

export async function getStaticPaths() {
  return {paths: [], fallback: true}
}


export async function getStaticProps(props) {
  const postId = props.params.postId
  const [post, children] = await Promise.all([
    notion.pages.retrieve({page_id: postId}),
    notion.blocks.children.list({block_id: postId})
  ])
  // const post = {}
  const blocks = children.results
  // const {result} = await ogs({url: 'https://tailwindui.com/'})
  // console.log(result)

  await retrieveBlocksChildren(notion, blocks)

  return {
    props: {
      post,
      blocks
    },
    revalidate: 3600
  }
}
