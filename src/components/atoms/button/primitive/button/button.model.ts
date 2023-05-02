import {Listbox} from '@headlessui/react'
import {UrlObject} from 'url'
import React, {AnchorHTMLAttributes, ButtonHTMLAttributes} from 'react'

type Url = string | UrlObject
type InternalLinkProps = {
  href: Url
  replace?: boolean
  scroll?: boolean
  shallow?: boolean
  passHref?: boolean
  prefetch?: boolean
  locale?: string | false
  legacyBehavior?: boolean
  onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>
  onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>
  onClick?: React.MouseEventHandler<HTMLAnchorElement>
}
type PrimitiveButtonExtendedProps<T> = 
  T extends 'a'
  ? AnchorHTMLAttributes<HTMLAnchorElement>
  : T extends Link
  ? InternalLinkProps
  : ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonTypes = {
  a: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>
  button: React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
}
export type PrimitiveButtonPropsImpl<T extends keyof ButtonTypes | Link> =
 PrimitiveButtonExtendedProps<T> & PrimitiveButtonBase
export type Link = React.ForwardRefExoticComponent<Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>,
 keyof InternalLinkProps> & InternalLinkProps & {
  children?: React.ReactNode
} & React.RefAttributes<HTMLAnchorElement>>

type PrimitiveButtonBase = {
  as?: keyof ButtonTypes | Link | typeof Listbox.Button
  children: React.ReactNode
  disabled?: boolean
  loading?: boolean
  className?: string
  HTMLProps?: Record<string, string>
}

export class PrimitiveButtonProps<T extends keyof ButtonTypes | Link> {
  as: keyof ButtonTypes | Link | typeof Listbox.Button
  children: React.ReactNode
  className?: string
  disabled?: boolean
  loading?: boolean
  HTMLProps?: Record<string, string>

  constructor(props: PrimitiveButtonPropsImpl<T>) {
    this.children = props.children
    this.as = props.as || 'button'
    this.className = props.className || ''
    this.disabled = props.disabled
    this.loading = props.loading
    this.HTMLProps = props.HTMLProps || {}
  }
}
