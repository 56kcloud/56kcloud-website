import {ImageProps} from '@/models/image.model'
import {StaticImageData} from 'next/image'

export type IllustrationCardPropsImpl = {
  number: number
  illustration: ImageProps
  icon: StaticImageData
  title: string
  description: string
  alignment?: string
  theme?: string
}
