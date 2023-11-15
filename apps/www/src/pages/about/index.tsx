import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {useRouter} from 'next/router'

export default function AboutPage({components, seo}: PageProps) {
  const router = useRouter()
  return pageRenderer(components, seo, router.asPath)
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const props = await getPageProps('about-page', context.locale)
  return {props}
}
