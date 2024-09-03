import {IconProps, IconType} from './icon.model'

export type LinkProps = {
  link: string
  links?: never
  title: string
  icon?: IconType
}

export type SocialLinks = {
  // eslint-disable-next-line no-unused-vars
  socialIcon: (props: IconProps) => JSX.Element
} & LinkProps
