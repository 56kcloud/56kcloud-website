import {ComponentBlueprint} from '@/utils/cms/renderer/components'
import {ImageProps} from './image.model'

export type Seo = {
  title: string
  description: string
  image: ImageProps
}

export type PageComponents = Array<ComponentBlueprint>
export type PageSeo = Seo
