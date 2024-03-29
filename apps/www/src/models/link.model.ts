import {IconProps} from './icon.model'

export type LinkProps = {
  link: string
  text: string
}

export type SocialLinks = {
  // eslint-disable-next-line no-unused-vars
  icon: (props: IconProps) => JSX.Element
} & LinkProps
