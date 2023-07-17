import {getPageComponents} from '@/utils/cms/components'
import {getPageComponentsProps} from '@/utils/cms/endpoints'

export default function Home({components}) {
  return getPageComponents(components)
}

export async function getStaticProps(options) {
  const components = await getPageComponentsProps(options.locale)
  return {
    props: {
      components
    }
  }
}
