import {NotionPost} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import Layout from '@/components/organisms/layout'
import PostDetail from '@/components/molecules/post'

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

export async function getServerSideProps(context) {
  const postSlug = context.query.id
  const res = await fetch(`/blog/posts/${postSlug}/post.json`)
  const post = await res.json()
  return {
    props: {post}
  }
}
