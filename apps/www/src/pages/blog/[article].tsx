import {Article} from '@/models/article.model'
import {GetStaticPropsContext} from 'next'
import {PageProps} from '@/models/page.mode'
import {getPageProps} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../configs/server'

export default function BlogPage({components, openGraph}: PageProps) {
  return pageRenderer(components, openGraph)
}

export async function getStaticPaths() {
  const articles = await strapiFetcher.call({
    path: '/api/articles-slugs'
  })
  const paths = articles.map((article: Partial<Article>) => ({
    params: {article: article.slug}
  }))
  return {
    paths,
    fallback: true
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const article = context.params?.article || ''
  const props = await getPageProps(`articles/${article}`, context.locale)
  return {props}
}
