import {getPageComponents} from '@/utils/cms/components'
import {getPageComponentsProps, getSingleTypeProps} from '@/utils/cms/endpoints'
import PostDetail from '@/components/molecules/post'

export default function BlogPost({components}) {
  return getPageComponents(components)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(options) {
  const blog = await getSingleTypeProps(`blog-post/${options.params.slug}`, options.locale)
  const components = [{props: blog, component: 'blog-post'}]
  return {
    props: {
      components
    }
  }
}
