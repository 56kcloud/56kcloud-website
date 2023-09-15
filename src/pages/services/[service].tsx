import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export default function ServicePage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph, 'CenteredLayout')
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const service = context.params?.service || ''
  const props = await getPageProps(`services/${service}`, context.locale)
  return {props}
}
