import {BasePageProps} from '../../page'
import {Metadata} from 'next'
import {getDictionary} from '../../dictionaries'
import {getList, getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {notFound} from 'next/navigation'
import {pageRenderer} from '@/utils/cms/renderer/components'

type SolutionPageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'solutions/'

export async function generateStaticParams() {
  return await getList('solutions')
}

export async function generateMetadata({params}: SolutionPageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: `/solutions/${params.slug}`,
        images: [props.image.url]
      }
    }
  }
  return {}
}

export default async function SolutionPage({params}: SolutionPageProps) {
  try {
    const dict = await getDictionary(params.locale)
    const components = await getPageComponents(`${basePath}${params.slug}`, params.locale)
    return pageRenderer(dict, components)
  } catch (e) {
    notFound()
  }
}
