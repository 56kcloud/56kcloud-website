import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function BlogPage({components, seo}: PageProps) {
  return pageRenderer(components, seo)
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('blog-page', context.locale)
  return {props}
}
