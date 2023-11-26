import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getList, getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

type ServicePageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'services/'

export async function generateStaticParams() {
  return await getList('services')
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/services/${params.slug}`,
        images: [props.image.url]
      }
    }
  }
  return {}
}

export default async function servicePage({params}: ServicePageProps) {
  const dict = await getDictionary(params.locale)
  const components = await getPageComponents(`${basePath}${params.slug}`, params.locale)
  return pageRenderer(dict, components)
}
