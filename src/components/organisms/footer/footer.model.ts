import {Image} from '@/models/image.model'

export const backgroundOptions = ['cover', 'color'] as const
export type FooterProps = {
  background?: typeof backgroundOptions[number]
  logo: Image
  links: Array<{
    title: string
    href: string
  }>
  address: string
  title: string
  gMapAddress: string
}
