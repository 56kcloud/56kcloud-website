import {ImageProps} from '@/models/image.model'

export const backgroundOptions = ['cover', 'color'] as const
export type FooterProps = {
  background?: typeof backgroundOptions[number]
  logo: ImageProps
  links: Array<{
    title: string
    href: string
  }>
  address: string
  title: string
  gMapAddress: string
}
