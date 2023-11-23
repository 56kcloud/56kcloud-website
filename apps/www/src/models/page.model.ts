import {ComponentBlueprint} from '@/utils/cms/renderer/blueprints'
import {ImageProps} from './image.model'

export type Seo = {
  title: string
  description: string
  image: ImageProps
}

export type PageComponents = Array<ComponentBlueprint>
export type PageSeo = Seo
