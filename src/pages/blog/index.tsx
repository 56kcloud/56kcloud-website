import {NotionPostPreview} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {Tag} from '@/models/tag.model'
import {promises as fs} from 'fs'
import Layout from '@/components/organisms/layout'
import MediumTitleSection from '@/components/molecules/title-section/medium'
import PostCardList from '@/components/organisms/card-list/post'
import path from 'path'
interface BlogPageProps extends PageProps {
  posts: Array<NotionPostPreview>
  tags: Array<Tag>
}


export default function Blog({t, posts, tags}: BlogPageProps) {
  return (
    <Layout
      t={t}
      fullHeightHero
      title='56K.Cloud | Blog'
      description='Tech, stories and thoughts from 56K.Cloud'
    >
      <MediumTitleSection
        title='From the blog'
        subTitle='Tech, stories and thoughts from 56K.Cloud'
        className='mb-5'/>
      <div className='section-padding'>
        <PostCardList
          tags={tags}
          posts={posts}/>
      </div>
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
