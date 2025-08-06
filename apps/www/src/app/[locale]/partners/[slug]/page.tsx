import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getList, getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {notFound} from 'next/navigation'
import {pageRenderer} from '@/utils/cms/renderer/components'

type PartnerPageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'partners/'

export async function generateStaticParams() {
  return await getList('partners')
}

export async function generateMetadata({params}: PartnerPageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/partners/${params.slug}`,
        images: [props.image.url]
      }
    }
  }
  return {}
}

export default async function PartnerPage({params}: PartnerPageProps) {
  try {
    const dict = await getDictionary(params.locale)
    const components = await getPageComponents(`${basePath}${params.slug}`, params.locale)
    return pageRenderer(dict, components)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    notFound()
  }
}
