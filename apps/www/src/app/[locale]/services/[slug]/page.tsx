import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../../../configs/server'

type ServicePageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'services/'

export async function generateStaticParams() {
  const services = await strapiFetcher.call({
    path: '/api/services-slugs'
  })
  return services
}

export async function generateMetadata({params}: ServicePageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/services/${params.slug}`,
        images: [props.image.src]
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
