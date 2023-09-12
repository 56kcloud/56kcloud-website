import {createPage, getPageComponents} from '@/utils/cms/components'
import {getPageProps} from '@/utils/cms/endpoints'

export default function Page({components, layout, openGraph}) {
  return createPage(layout, getPageComponents(components), openGraph)
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  }
}

export async function getStaticProps(options) {
  const path = options.params.path?.join('/')
  const props = await getPageProps(path, options.locale)
  return {props}
}
