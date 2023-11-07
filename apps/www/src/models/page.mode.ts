import {ComponentBlueprint} from '@/utils/cms/renderer/blueprints'
import {ImageProps} from './image.model'

export type PageOpenGraph = {
  title: string
  description: string
  image: ImageProps
}

export type PageProps = {
  components: Array<ComponentBlueprint>
  openGraph: PageOpenGraph
}
