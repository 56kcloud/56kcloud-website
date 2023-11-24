import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getList, getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

type ArticlePageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'articles/'

export async function generateStaticParams() {
  return await getList('articles')
}

export async function generateMetadata({params}: ArticlePageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/blog/${params.slug}`,
        images: [props.image.src]
      }
    }
  }
  return {}
}

export default async function ArticlePage({params}: ArticlePageProps) {
  const dict = await getDictionary(params.locale)
  const components = await getPageComponents(`${basePath}${params.slug}`, params.locale)
  return pageRenderer(dict, components)
}
