import {NotionPost, NotionPostPreview} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {promises as fs} from 'fs'
import Layout from '@/components/organisms/layout'
import PostCardList from '@/components/organisms/card-list/post'
import PostDetail from '@/components/molecules/post'
import path from 'path'

type PostPageProps = {
  notionPost: NotionPost
  similarPosts: Array<NotionPostPreview>
} & PageProps

export default function Post({notionPost, similarPosts, t}: PostPageProps) {
  console.log(notionPost.post)
  return (
    <Layout t={t}>
      <div className='flex items-end justify-center p-10'>
        <PostDetail {...notionPost}/>
      </div>
      <div>
        <div>

        </div>
        <div>
          {/* <h1>{notionPost.post.properties.author.name.title[0].plain_text}</h1> */}
          <p></p>
          <p></p>
        </div>
      </div>
      <PostCardList
        posts={similarPosts}
      />
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = JSON.parse(await fs.readFile(path.join(process.cwd(),  'public/blog/posts.json'), 'utf8'))
  const paths = posts.map(post => ({params: {slug: post.properties.slug.rich_text[0].plain_text}}))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context) {
  const postSlug = context.params.slug
  const notionPost = JSON.parse(
    await fs.readFile(path.join(process.cwd(), `public/blog/posts/${postSlug}/post.json`), 'utf8')
  )
  const postTags = notionPost.post.properties.tags.multi_select.map(tag => tag.name)
  const posts = 
    JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/blog/posts.json'), 'utf8'))
  const similarPosts = posts.filter(post => 
    post.properties.tags.multi_select.map(tag => tag.name).some(tag => postTags.includes(tag))
  ).slice(0, 6)
  return {
    props: {
      notionPost,
      similarPosts
    }
  }
}
