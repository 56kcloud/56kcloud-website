import {
  ButtonTypes,
  Link,
  PrimitiveButtonProps,
  PrimitiveButtonPropsImpl
} from './primitive/button/button.model'
export const buttonSizes = ['small', 'medium', 'large'] as const
export const buttonShapes = ['square', 'rounded', 'circle'] as const
export const buttonVariants = ['default', 'link', 'ghost'] as const
export const buttonTones = ['primary', 'secondary', 'gray', 'error', 'white'] as const
export const buttonAlignments = ['start', 'center', 'end'] as const

const toneClasses: Record<typeof buttonTones[number], Record<typeof buttonVariants[number], string>> = {
  primary: {
    default: 'bg-primary-200 text-primary-500 hover:bg-primary-100 focus-visible:ring-primary-500 \
    focus-visible:outline-primary-200 uppercase tracking-widest',
    link: 'text-primary-800 hover:underline hover:bg-gray-50 focus-visible:outline-primary-600 focus-visible:underline',
    ghost: 'text-primary-800 hover:bg-primary-100/30 focus-visible:outline-primary-600  \
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
  },
  white: {
    default: 'text-primary-500 hover:bg-primary-100/20 hover:text-primary-800 focus-visible:ring-primary-500 \
    focus-visible:outline-primary-200',
    link: '',
    ghost: ''
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

export type ButtonPropsImpl<T extends keyof ButtonTypes | Link> = PrimitiveButtonPropsImpl<T> & ({
  size?: typeof buttonSizes[number]
  shape?: typeof buttonShapes[number]
  align?: typeof buttonAlignments[number]
  tone?: typeof buttonTones[number]
  variant?: typeof buttonVariants[number]
  width?: number | 'auto'
  leading?: React.ReactNode
  trailing?: React.ReactNode
} | {
  unstyled: boolean
})

export class ButtonProps<T extends keyof ButtonTypes | Link> extends PrimitiveButtonProps<T> {
  unstyled?: boolean
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
    this.unstyled = props['unstyled']
    if (!this.unstyled) {
      this.size = props['size'] || 'medium'
      this.shape = props['shape'] || 'rounded'
      this.align = props['align'] || 'center'
      this.tone = props['tone'] || 'primary'
      this.variant = props['variant'] || 'default'
      this.width = props['width'] || 'auto'
      this.leading = props['leading']
      this.trailing = props['trailing']
    }
    this.HTMLProps = this.HTMLPropsIntegration(props)
  }


  private HTMLPropsIntegration(props: PrimitiveButtonPropsImpl<T>) {
    let HTMLProps = {}
    const HTMLPropsKeys = Object.keys(props).filter(prop => !Object.keys(this).includes(prop))
    HTMLPropsKeys.forEach(specificProp => {
      const value = props[specificProp as keyof ButtonPropsImpl<T>]
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Object.assign(HTMLProps , {[specificProp]: value})
    })
    HTMLProps['disabled'] = props.loading || props['disabled']
    return HTMLProps
  }

  public buttonVariants() {
    if (this.unstyled) {
      return ''
    }
    let classes = 'flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 \
      disabled:opacity-50 disabled:cursor-not-allowed font-medium'
    classes += ` ${toneClasses[this.tone][this.variant]}`
    classes += ` ${sizeClasses[this.size]}`
    classes += ` ${shapeClasses[this.shape]}`
    return classes
  }

  public alignmentClasses() {
    if (this.unstyled) {
      return ''
    }
    return `flex flex-1 ${alignmentClasses[this.align]}`
  }
}
