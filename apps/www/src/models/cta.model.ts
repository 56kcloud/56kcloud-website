import {LinkProps} from './link.model'
import {buttonTones} from '@/components/ui/atoms/button/button.model'

export type CTAProps = {
  tone: typeof buttonTones[number]
} & LinkProps
