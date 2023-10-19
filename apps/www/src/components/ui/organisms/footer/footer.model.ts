import {ContactUsCTA} from '@/models/contact-us-cta.model'
import {ImageProps} from '@/models/image.model'
import {LinkProps} from '@/models/link.model'
import {LocationObject} from '@/models/location.model'

export const backgroundOptions = ['cover', 'color'] as const
export type FooterProps = {
  logo: ImageProps
  links: Array<LinkProps>
  locations: Array<LocationObject>
  contactUsCTA: ContactUsCTA
}
