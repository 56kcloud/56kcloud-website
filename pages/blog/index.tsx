import {Client} from '@notionhq/client'
import {authorsDbId, notionKey, postsDbId} from '../../config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import BlogCardsWrapper from '../../components/organisms/blog-cards-wrapper'
import Head from 'next/head'
import Layout from '../../components/organisms/layout'
import Link from 'next/link'
import MediumTitleIntro from '../../components/molecules/medium-title-intro'
import slugify from 'slugify'

const notion = new Client({auth: notionKey})

export default function Blog({posts}) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const router = useRouter()
  
  function filterPosts(filterBy: string) {
    setFilteredPosts(filterBy 
      ? posts.filter((post) => {
        return post.properties.tags.multi_select.map(select => slugify(select.name.toLowerCase())).includes(filterBy)
      }) 
      : posts)
  }

  useEffect(() => {
    if (router.isReady) {
      filterPosts(router.query.tag?.toString() || '')
    }
  }, [router])

  return (
    <Layout>
      <Head>
        <title>56K.Cloud | Blog</title>
      </Head>
      <MediumTitleIntro title='From the blog' />
      <Link href={'/blog?tag=aws'}>AWS</Link>
      <Link href={'/blog?tag=company-news'}>company news</Link>
      <Link href={'/blog?tag=5g'}>5G</Link>
      <BlogCardsWrapper posts={filteredPosts} />
    </Layout>
  )
}

export async function getStaticProps() {
  const authors = (await notion.databases.query({database_id: authorsDbId})).results || []
  const db = await notion.databases.retrieve({database_id: postsDbId})
  console.log(db.properties.tags.multi_select.options)
  const postsQuery = (await notion.databases.query({database_id: postsDbId,
    sorts: [
      {
        property: 'published_at',
        direction: 'descending'
      }
    ],
    filter: {
      property: 'tags',
      multi_select: {
        contains: 'Company News'
      }
    }
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
