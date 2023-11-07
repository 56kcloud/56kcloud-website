import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {Solution} from '@/models/solution.model'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../configs/server'

export default function SolutionPage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph)
}

export async function getStaticPaths() {
  const solutions = await strapiFetcher.call({
    path: '/api/solutions-slugs'
  })
  const paths = solutions.map((solution: Partial<Solution>) => ({
    params: {solution: solution.slug}
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const solution = context.params?.solution || ''
  const props = await getPageProps(`solutions/${solution}`, context.locale)
  return {props}
}