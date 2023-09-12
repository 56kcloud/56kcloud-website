import {Image} from '@/models/image.model'
import {StaticImageData} from 'next/image'

export type IllustrationCardPropsImpl = {
  number: number
  illustration: Image
  icon: StaticImageData
  title: string
  description: string
  alignment?: string
  theme?: string
}
