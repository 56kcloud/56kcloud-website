import {GetStaticPropsContext} from 'next'
import {createPage, getPageComponents} from '@/utils/cms/renderer/components'
import {getPageProps} from '@/utils/cms/endpoints'

export type PageProps = {
  components: Array<Record<string, string>>
  layout: string
  openGraph: Record<string, string>
}

export default function HomePage({components, layout, openGraph}: PageProps) {
  return createPage(layout, getPageComponents(components), openGraph)
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('home-page', context.locale)
  return {props}
}
