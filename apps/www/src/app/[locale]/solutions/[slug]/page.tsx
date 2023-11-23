import {BasePageProps} from '../../page'
import {Metadata} from 'next'
// import {StaticParam} from '@/models/static-params.model'
import {getDictionary} from '../../dictionaries'
import {getPageComponents, getPageSeo} from '@/utils/cms/endpoints'
import {pageRenderer} from '@/utils/cms/renderer/components'
import {strapiFetcher} from '../../../../../configs/server'

type SolutionPageProps = BasePageProps & {
  params: {
    slug: string
  }
}

const basePath = 'solutions/'

export async function generateStaticParams() {
  const solutions = await strapiFetcher.call({
    path: '/api/solutions-slugs'
  })
  return solutions
}

export async function generateMetadata({params}: SolutionPageProps): Promise<Metadata> {
  const props = await getPageSeo(`${basePath}${params.slug}`, params.locale)
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

export default async function SolutionPage({params}: SolutionPageProps) {
  const dict = await getDictionary(params.locale)
  const components = await getPageComponents(`${basePath}${params.slug}`, params.locale)
  return pageRenderer(dict, components)
}
