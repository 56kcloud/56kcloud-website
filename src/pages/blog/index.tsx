import {GetStaticPropsContext} from 'next'
import {createPage, getPageComponents} from '@/utils/cms/renderer/components'
import {getPageProps} from '@/utils/cms/endpoints'

export type PageProps = {
  components: Array<Record<string, string>>
  layout: string
  openGraph: Record<string, string>
}

export default function BlogPage({components, layout, openGraph}: PageProps) {
  console.log(components, layout, openGraph)
  return createPage(layout, getPageComponents(components), openGraph)
  return <div>TEST</div>
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('blog-page', context.locale)
  return {props}
}
