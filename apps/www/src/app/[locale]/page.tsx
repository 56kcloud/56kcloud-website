import {Metadata} from 'next'
import {getDictionary} from './dictionaries'
import {getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'

export type BasePageProps = {
  params: {locale: string}
}

const pagePath = 'home-page'

export async function generateMetadata({params}: BasePageProps): Promise<Metadata> {
  const props = await getPageSeo(pagePath, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        url: '/',
        images: [props.image.url]
      }
    }
  }
  return {}
}

export default async function HomePage({params}: BasePageProps) {
  const dict = await getDictionary(params.locale)
  const components = await getPageComponents(pagePath, params.locale)
  return pageRenderer(dict, components)
}
