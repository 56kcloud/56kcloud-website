import {GetStaticPropsContext} from 'next'
import {createPage, getPageComponents} from '@/utils/cms/renderer/components'
import {getPageProps} from '@/utils/cms/endpoints'

export type PageProps = {
  components: Array<Record<string, string>>
  layout: string
  openGraph: Record<string, string>
}

export default function Page({components, layout, openGraph}: PageProps) {
  return createPage(layout, getPageComponents(components), openGraph)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const path = context.params 
    ? Array.isArray(context.params.path)
      ? context.params.path.join('/') 
      : context.params.path
    : '/'
  const props = await getPageProps(path, context.locale)
  return {props}
}
