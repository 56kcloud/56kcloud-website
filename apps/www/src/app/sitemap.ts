import {MetadataRoute} from 'next'
import {getList} from '@/utils/cms/endpoints'
import {hostname} from '../../configs/server'

const staticPaths = [
  '/',
  '/blog',
  '/about'
]

async function getArticlePaths() {
  return (await getList('articles')).map((article) => {
    return `${article.locale}/blog/${article.slug}`
  })
}

async function getSolutionsPaths() {
  return (await getList('solutions')).map((solution) => {
    return `${solution.locale}/solutions/${solution.slug}`
  })
}

async function getServicesPaths() {
  return (await getList('services')).map((service) => {
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
