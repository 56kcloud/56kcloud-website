import {getPageComponents} from '@/utils/cms/components'
import {getPageComponentsProps} from '@/utils/cms/endpoints'

export default function Blog({components}) {
  return getPageComponents(components)
  // return JSON.stringify(components)
}

export async function getStaticProps(options) {
  const components = await getPageComponentsProps('blog', options.locale)
  console.log(components)
  return {
    props: {
      components
    }
  }
}
