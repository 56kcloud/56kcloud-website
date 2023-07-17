import {components} from '@/utils/api/components'
import {getPageComponentsProps} from '@/utils/api/page'

export function getPageComponents(comps) {
  return comps.map((item, index) => {
    const Comp = components[item.component].component
    return <Comp
      {...item.props}
      key={index}
    />
  })
}

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
