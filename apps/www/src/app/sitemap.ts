import {ItemLocale} from '@/models/locale.model'
import {MetadataRoute} from 'next'
import {hostname, strapiFetcher} from '../../configs/server'

const staticPaths = [
  '/',
  '/blog',
  '/about'
]

async function getArticlePaths() {
  const articles = await strapiFetcher.call({
    path: '/api/articles-slugs'
  })

  return articles.map((article: ItemLocale) => {
    return `${article.locale}/blog/${article.slug}`
  })
}

async function getSolutionsPaths() {
  const solutions = await strapiFetcher.call({
    path: '/api/solutions-slugs'
  })
  
  return solutions.map((solution: ItemLocale) => {
    return `${solution.locale}/solutions/${solution.slug}`
  })
}

async function getServicesPaths() {
  const services = await strapiFetcher.call({
    path: '/api/services-slugs'
  })
  
  return services.map((service: ItemLocale) => {
    return `${service.locale}/services/${service.slug}`
  })
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const paths = [
    ...staticPaths,
    ...await getArticlePaths(),
    ...await getSolutionsPaths(),
    ...await getServicesPaths()
  ]

  return paths.map(path => ({
    url: `${hostname}${path}`,
    lastModified: new Date()
  }))
}
