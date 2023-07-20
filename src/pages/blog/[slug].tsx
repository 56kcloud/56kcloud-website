import {getPageComponents} from '@/utils/cms/components'
import {getPageComponentsProps, getSingleTypeProps} from '@/utils/cms/endpoints'
import PostCardList from '@/components/organisms/card-list/post'
import PostDetail from '@/components/molecules/post'

export default function BlogPost({components, similarPosts}) {
  // console.log(similarPosts)
  return <>
    {getPageComponents(components)}
    {/* {similarPosts && 
      <PostCardList
        posts={similarPosts}
      />
    } */}
  </>
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(options) {
  const blog = await getPageComponentsProps('blog-detail', options.locale)
  const similarPosts = (await getSingleTypeProps(
    'blog-posts/',
    options.locale,
    'blog-list',
    `?filters[tags][name][$eq]=AWS&populate=deep&locale=${options.locale}`
  ))
  console.log('⭐️', similarPosts)
  console.log('🤯', blog)
  // const blog = await getSingleTypeProps(`blog-post/${options.params.slug}`, options.locale)
  // console.log(similarPosts)
  // const components = [{props: blog, component: 'blog-post'}]
  return {
    props: {
      components: blog,
      similarPosts: []
    }
  }
}
