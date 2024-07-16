import {LinkProps} from './link.model'

export type NavigationItemWithDropdown = {
  title: string
  link?: never
  links?: Array<LinkProps>
}

export type NavigationItem = NavigationItemWithDropdown | LinkProps
