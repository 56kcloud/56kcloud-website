import {
  ButtonProps as  ButtonPrimitiveProps,
  ButtonPropsImpl as ButtonPrimitivePropsImpl,
  ButtonTypes,
  Link
} from './primitive/button/button.model'
export const buttonSizes = ['small', 'medium', 'large'] as const
export const buttonShapes = ['square', 'rounded', 'circle'] as const
export const buttonVariants = ['default', 'link', 'ghost'] as const
export const buttonTones = ['primary', 'secondary', 'gray', 'error'] as const
export const buttonAlignments = ['start', 'center', 'end'] as const

const toneClasses: Record<typeof buttonTones[number], Record<typeof buttonVariants[number], string>> = {
  primary: {
    default: 'bg-primary-200 text-primary-500 hover:bg-primary-100 focus-visible:ring-primary-500 \
    focus-visible:outline-primary-200 uppercase tracking-widest',
    link: 'text-primary-800 hover:underline hover:bg-gray-50 focus-visible:outline-primary-600 focus-visible:underline',
    ghost: 'text-primary-800 hover:bg-primary-50 focus-visible:outline-primary-600  \
    data-[active=true]:underline data-[active=true]:decoration-primary-200 data-[active=true]:underline-offset-4	\
    data-[active=true]:decoration-2'
  },
  secondary: {
    default: 'text-white bg-secondary-500 hover:bg-secondary-600 focus-visible:ring-secondary-500 \
     focus-visible:outline-secondary-600',
    link: 'text-secondary-500 hover:underline hover:bg-gray-50 focus-visible:outline-secondary-600 \
    focus-visible:underline',
    ghost: 'text-secondary-500 hover:bg-secondary-50 focus-visible:outline-secondary-600'
  },
  gray: {
    default: 'text-white bg-gray-500 hover:bg-gray-600 focus-visible:ring-gray-500 \
     focus-visible:outline-gray-600',
    link: 'text-gray-500 hover:underline hover:bg-gray-50 focus-visible:outline-gray-600 \
    focus-visible:underline',
    ghost: 'text-gray-500 hover:bg-gray-50 focus-visible:outline-gray-600'
  },
  error: {
    default: 'text-white bg-error-500 hover:bg-error-600 focus-visible:ring-error-500 focus-visible:outline-error-600',
    link: 'text-error-500 hover:underline hover:bg-gray-50 focus-visible:outline-error-600 focus-visible:underline',
    ghost: 'text-error-500 hover:bg-error-50 focus-visible:outline-error-600'
  }
}

const sizeClasses: Record<typeof buttonSizes[number], string> = {
  small: 'px-4 py-3 2xl:px-6 text-xs 2xl:text-sm',
  medium: 'px-4 py-3 2xl:px-6 text-base',
  large: 'px-5 py-4 2xl:px-7'
}

const shapeClasses: Record<typeof buttonShapes[number], string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circle: 'rounded-full'
}

const alignmentClasses: Record<typeof buttonAlignments[number], string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end'
}

export type ButtonPropsImpl<T extends keyof ButtonTypes | Link> = ButtonPrimitivePropsImpl<T> & {
  size?: typeof buttonSizes[number]
  shape?: typeof buttonShapes[number]
  align?: typeof buttonAlignments[number]
  tone?: typeof buttonTones[number]
  variant?: typeof buttonVariants[number]
  width?: number | 'auto'
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

export class ButtonProps<T extends keyof ButtonTypes | Link> extends ButtonPrimitiveProps<T> {
  size?: typeof buttonSizes[number]
  shape?: typeof buttonShapes[number]
  align?: typeof buttonAlignments[number]
  tone?: typeof buttonTones[number]
  variant?: typeof buttonVariants[number]
  width?: number | 'auto'
  leading?: React.ReactNode
  trailing?: React.ReactNode

  constructor(props: ButtonPropsImpl<T>) {
    super(props)
    this.size = props.size || 'medium'
    this.shape = props.shape || 'rounded'
    this.align = props.align || 'center'
    this.tone = props.tone || 'primary'
    this.variant = props.variant || 'default'
    this.width = props.width || 'auto'
    this.leading = props.leading
    this.trailing = props.trailing
    this.HTMLProps = this.HTMLPropsIntegration(props)
  }

  public buttonVariants() {
    let classes = 'flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 \
    disabled:opacity-50 disabled:cursor-not-allowed font-medium'
    classes += ` ${toneClasses[this.tone][this.variant]}`
    classes += ` ${sizeClasses[this.size]}`
    classes += ` ${shapeClasses[this.shape]}`
    return classes
  }

  public alignmentClasses() {
    return `flex flex-1 ${alignmentClasses[this.align]}`
  }
}