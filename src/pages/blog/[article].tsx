import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function BlogPage({components, layout, openGraph}: PageProps) {
  console.log(components)
  return pageRenderer(layout, components, openGraph)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps(`articles/${context.params.article}`, context.locale)
  return {props}
}
