import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function BlogPage({components, openGraph}: PageProps) {
  console.log(components)
  return pageRenderer(components, openGraph)
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('blog-page', context.locale)
  return {props}
}
