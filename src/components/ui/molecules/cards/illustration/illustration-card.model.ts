import {ImageProps} from '@/models/image.model'

export type IllustrationCardPropsImpl = {
  number: number
  illustration: ImageProps
  href: string
  title: string
  description: string
  theme?: string
}
