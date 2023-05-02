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

export async function getServerSideProps() {
  // const postSlug = context.query.id
  const post = {}
  console.log(await fs.readdir(path.join(process.cwd())))
  // const post = await fs.readFile(path.join(process.cwd(), `/blog/posts/${postSlug}/post.json`), 'utf8')
  return {
    props: {post}
  }
}
