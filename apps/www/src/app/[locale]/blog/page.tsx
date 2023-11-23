import {BasePageProps} from '../page'
import {Metadata} from 'next'
import {getDictionary} from '../dictionaries'
import {getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {locales} from '../../../../configs/server'
import {pageRenderer} from '@/utils/cms/renderer/components'

const pagePath = 'blog-page'

export async function generateStaticParams() {
  return locales.map((locale) => ({locale}))
}

export async function generateMetadata({params}: BasePageProps): Promise<Metadata> {
  const props = await getPageSeo(pagePath, params.locale)
  if (props) {
    return {
      title: props.title,
      description: props.description,
      openGraph: {
        images: [props.image.src]
      }
    }
  }
  return {}
}

export default async function BlogPage({params}: BasePageProps) {
  const dict = await getDictionary(params.locale)
  const components = await getPageComponents(pagePath, params.locale)
  return pageRenderer(dict, components)
}
