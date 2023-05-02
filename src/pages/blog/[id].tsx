import {NotionPost} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {promises as fs} from 'fs'
import Layout from '@/components/organisms/layout'
import PostDetail from '@/components/molecules/post'
import path from 'path'

type PostPageProps = {
  post: NotionPost
} & PageProps

export default function Post({post, t}: PostPageProps) {
  return (
    <Layout t={t}>
      <div className='flex items-end justify-center p-10'>
        <PostDetail {...post}/>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const posts = JSON.parse(await fs.readFile(path.join(process.cwd(),  'public/blog/posts.json'), 'utf8'))
  return {
    paths: posts.map(post => ({params: {id: post['properties'].slug.rich_text[0].plain_text}})),
    fallback: 'blocking' //indicates the type of fallback
  }
}

export async function getStaticProps(context) {
  const postSlug = context.params.id
  // const post = {}
  // console.log(await fs.readdir(path.join(process.cwd(), 'public/')))
  // console.log(await fs.readdir(path.join(process.cwd(), 'public/blog')))
  // console.log(await fs.readdir(path.join(process.cwd(), 'public/posts')))
  // console.log(await fs.readdir(path.join(process.cwd(),  `public/blog/posts/${postSlug}/post.json`)))
  const post = await fs.readFile(path.join(process.cwd(), `public/blog/posts/${postSlug}/post.json`), 'utf8')
  return {
    props: {post}
  }
}
