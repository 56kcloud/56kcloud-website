import {getPageComponents} from '@/utils/cms/components'
import {getPageComponentsProps} from '@/utils/cms/endpoints'

export default function Home({components}) {
  return getPageComponents(components)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(options) {
  const components = await getPageComponentsProps(options.params.slug, options.locale)
  return {
    props: {
      components
    }
  }
}
