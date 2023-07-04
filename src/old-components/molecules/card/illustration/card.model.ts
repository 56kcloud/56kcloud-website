import {StaticImageData} from 'next/image'

export type IllustrationCardPropsImpl = {
  number: number
  image: StaticImageData
  icon: StaticImageData
  title: string
  description: string
  alignment?: string
  theme?: string
}

export class IllustrationCardProps {
  number: number
  image: StaticImageData
  icon: StaticImageData
  title: string
  description: string
  alignment?: string
  theme?: string

  constructor(props: IllustrationCardPropsImpl) {
    this.number = props.number
    this.image = props.image
    this.icon = props.icon
    this.title = props.title
    this.description = props.description
    this.alignment = props.alignment || 'left'
    this.theme = props.theme || 'dark'
  }
}
