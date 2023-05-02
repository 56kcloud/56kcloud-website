import {NotionPostPreview} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {QueryClient} from 'react-query'
import {Tag} from '@/models/tag.model'
import {promises as fs} from 'fs'
import {useEffect} from 'react'
import Head from 'next/head'
import Layout from '@/components/organisms/layout'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import PostCardList from '@/components/organisms/card-list/post'
import path from 'path'
interface BlogPageProps extends PageProps {
  posts: Array<NotionPostPreview>
  tags: Array<Tag>
}


export default function Blog({t, posts, tags}: BlogPageProps) {
  const queryClient = new QueryClient()
  
  async function fetchPosts() {
    await Promise.all(posts.map(async post => {
      const response = await fetch(`/api/post/${post.properties.slug.rich_text[0].plain_text}`)
      const data = await response.json()
      return data
    }))
  }

  useEffect(() => {
    queryClient.prefetchQuery('posts', fetchPosts)
  }, [])

  return (
    <Layout
      t={t}
      fullHeightHero
    >
      <Head>
        <title>56K.Cloud | Blog</title>
      </Head>
      <MediumTitleSection
        title='From the blog'
        subTitle='Tech, stories and thoughts from 56K.Cloud'
        className='mb-5'/>
      <PostCardList
        tags={tags}
        posts={posts}/>
    </Layout>
  )
}

export async function getStaticProps() {
  const posts = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/blog/posts.json'), 'utf8'))
  const tags = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/blog/tags.json'), 'utf8'))

  return {
    props: {
      posts,
      tags
    },
    revalidate: 3600
  }
}
