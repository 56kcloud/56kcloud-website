import {BlogCardProps} from '../../components/molecules/blog-card'
import {Client} from '@notionhq/client'
import {authorsDbId, notionKey, postsDbId} from '../../config'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import BlogCardsWrapper from '../../components/organisms/blog-cards-wrapper'
import Head from 'next/head'
import Layout from '../../components/organisms/layout'
import MediumTitleIntro from '../../components/molecules/medium-title-intro'
import slugify from 'slugify'

const notion = new Client({auth: notionKey})

export type BlogProps = {
  posts: Array<BlogCardProps>
  tags: Array<string>
}

export default function Blog({posts, tags}: BlogProps) {
  const [filteredPosts, setFilteredPosts] = useState(posts)
  const router = useRouter()
  
  function filterPosts(filterBy: string) {
    setFilteredPosts(filterBy 
      ? posts.filter((post) => {
        return post['properties'].tags.multi_select.map(select => slugify(select.name.toLowerCase())).includes(filterBy)
        
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
      <MediumTitleIntro title='From the blog' subTitle='Tech, stories and thoughts from 56K.Cloud' className='mb-5' />
      <BlogCardsWrapper posts={filteredPosts} tags={tags} />
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

  const arrayOfTags = (await notion.databases.query({database_id: postsDbId})).results.map(
    post => post['properties'].tags.multi_select.map(select => slugify(select.name))).flat()
  const tags = [...new Set(arrayOfTags)]

  return {
    props: {
      posts,
      tags
    },
    revalidate: 3600
  }
}
