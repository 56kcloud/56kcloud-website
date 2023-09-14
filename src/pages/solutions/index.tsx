import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function SolutionsPage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph, 'CenteredLayout')
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('solutions-page', context.locale)
  return {props}
}
