import {Client} from '@notionhq/client'
import {authorsDbId, notionKey, postsDbId} from '../../config'
import BlogCardsWrapper from '../../components/organisms/blog-cards-wrapper'
import Head from 'next/head'
import Layout from '../../components/organisms/layout'
import MediumTitleIntro from '../../components/molecules/medium-title-intro'

const notion = new Client({auth: notionKey})

export default function Blog({posts}) {
  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Blog</title>
      </Head>
      <MediumTitleIntro title='From the blog' />
      <BlogCardsWrapper posts={posts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const authors = (await notion.databases.query({database_id: authorsDbId})).results || []
  const postsQuery = (await notion.databases.query({database_id: postsDbId,
    sorts: [
      {
        property: 'published_at',
        direction: 'descending'
      }
    ]
  })).results || []
  const posts = postsQuery.map(post => {
    if (post['properties'].author.relation.length > 0) {
      post['properties'].author = authors[
        authors.map(author => author.id).indexOf(post['properties'].author.relation[0].id)
      ]
    }
    return post
  })
  return {
    props: {
      posts
    },
    revalidate: 3600
  }
}
