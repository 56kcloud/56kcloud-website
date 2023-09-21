import {ReactNode} from 'react'

export type LinkProps = {
  href: string
  children: ReactNode
  alt?: string
  className?: string
  children?: React.ReactNode
}
