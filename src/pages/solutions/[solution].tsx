import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function SolutionPage({components, openGraph}: PageProps) {
  console.log(components)
  return pageRenderer(components, openGraph, 'CenteredLayout')
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const solution = context.params?.solution || ''
  const props = await getPageProps(`solutions/${solution}`, context.locale)
  return {props}
}
