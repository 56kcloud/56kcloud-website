import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function BlogPage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph, 'CenteredLayout')
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const slug = context.params?.slug || ''
  const props = await getPageProps(`team-members/${slug}`, context.locale)
  return {props}
}
