import {ComponentBlueprint} from '@/utils/cms/renderer/blueprints'

export type PageOpenGraph = {
  title: string
  description: string
  image: string | null
}

export type PageProps = {
  components: Array<ComponentBlueprint>
  openGraph: PageOpenGraph
}
