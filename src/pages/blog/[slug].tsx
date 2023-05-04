import {NextSeo} from 'next-seo'
import {NotionPost, NotionPostPreview} from '@/models/blog/blog-preview'
import {PageProps} from '@/models/page.model'
import {promises as fs} from 'fs'
import {hostname} from '../../../config'
import AuthorCard from '@/components/molecules/card/author'
import Layout from '@/components/organisms/layout'
import PostCardList from '@/components/organisms/card-list/post'
import PostDetail from '@/components/molecules/post'
import path from 'path'

type PostPageProps = {
  notionPost: NotionPost
  similarPosts: Array<NotionPostPreview>
} & PageProps

export default function Post({notionPost, similarPosts, t}: PostPageProps) {
  const ogTitle = notionPost.post.properties.name.title[0].plain_text
  const ogDescription = notionPost.post.properties.description.rich_text[0].plain_text
  const ogImage = notionPost.post.cover.file.url
  return (
    <Layout t={t}>
      <NextSeo
        title={ogTitle}
        description={ogDescription}
        openGraph={{
          url: hostname,
          title: ogTitle,
          description: ogDescription,
          images: [
            {
              url: `${hostname}${ogImage}`,
              alt: ogTitle
            }
          ],
          siteName: '56k.cloud'
        }}
        twitter={{
          handle: '@56k.cloud',
          site: '@56k.cloud',
          cardType: 'summary_large_image'
        }}
      />
      <div className='flex flex-col items-center'>
        <div className='w-full p-3 space-y-10 md:space-y-16 xl:p-10 max-w-7xl'>
          <div className='flex items-end justify-center'>
            <PostDetail {...notionPost}/>
          </div>
          <AuthorCard author={notionPost.post.properties.author}/>
          <h1 className='text-3xl text-center md:text-4xl title line-clamp-2'>You may also like</h1>
          {similarPosts && 
            <PostCardList
              posts={similarPosts}
            />
          }
        </div>
      </div>
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
    post.id !== notionPost.post.id &&
    post.properties.tags.multi_select.map(tag => tag.name).some(tag => postTags.includes(tag))
  ).slice(0, 6)
  return {
    props: {
      notionPost,
      similarPosts
    }
  }
}
