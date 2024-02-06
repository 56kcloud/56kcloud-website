import {cn} from '@/utils/toolbox'

export const buttonSizes = ['small', 'medium', 'large'] as const
export const buttonShapes = ['square', 'rounded', 'circle'] as const
export const buttonVariants = ['default', 'link', 'ghost'] as const
export const buttonTones = ['primary', 'secondary', 'slate'] as const
export const buttonAlignments = ['start', 'center', 'end'] as const

const toneClasses: Record<(typeof buttonTones)[number], Record<(typeof buttonVariants)[number], string>> = {
  primary: {
    default:
      'bg-sky-300 text-white text-slate-900 hover:bg-violet-300 focus-visible:ring-sky-300  focus-visible:outline-sky-300',
    link: 'text-sky-300 focus-visible:outline-sky-200 focus-visible:underline',
    ghost:
      'bg-transparent border-2 border-sky-300 text-sky-300 text-md \
      hover:border-violet-300 hover:bg-transparent hover:text-violet-300'
  },
  secondary: {
    default:
      'text-white bg-secondary-500 hover:bg-secondary-600 focus-visible:ring-secondary-500 focus-visible:outline-secondary-600',
    link: 'text-white data-[active=true]:text-white',
    ghost: 'text-secondary-500 hover:bg-secondary-50 focus-visible:outline-secondary-600'
  },
  slate: {
    default:
      'text-slate-900 bg-slate-100 hover:bg-slate-200 focus-visible:ring-slate-100 focus-visible:outline-slate-100',
    link: 'text-slate-400 data-[active=true]:text-white font-light',
    ghost: 'text-slate-400 hover:bg-slate-50 focus-visible:outline-slate-100'
  }
}

const sizeClasses: Record<(typeof buttonSizes)[number], string> = {
  small: 'px-2.5 py-1.5 text-sm',
  medium: 'px-3 py-2.5 text-sm',
  large: 'px-5 py-2.5 text-sm'
}

const shapeClasses: Record<(typeof buttonShapes)[number], string> = {
  square: 'rounded-none',
  rounded: 'rounded-md',
  circle: 'rounded-full'
}

const alignmentClasses: Record<(typeof buttonAlignments)[number], string> = {
  start: 'justify-start',
  center: 'justify-center',
  end: 'justify-end'
}

export type ButtonPropsImpl = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: (typeof buttonSizes)[number]
  shape?: (typeof buttonShapes)[number]
  align?: (typeof buttonAlignments)[number]
  tone?: (typeof buttonTones)[number]
  variant?: (typeof buttonVariants)[number]
  width?: number | 'auto'
  loading?: boolean
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

export class ButtonProps {
  children: React.ReactNode
  asChild: boolean
  size: (typeof buttonSizes)[number]
  shape: (typeof buttonShapes)[number]
  align: (typeof buttonAlignments)[number]
  tone: (typeof buttonTones)[number]
  variant: (typeof buttonVariants)[number]
  className: string
  loading?: boolean
  disabled?: boolean
  leading?: React.ReactNode
  trailing?: React.ReactNode
  HTMLProps?: Record<string, string | number | boolean | undefined>

  constructor(props: ButtonPropsImpl) {
    this.children = props.children
    this.asChild = props.asChild || false
    this.size = props.size || 'medium'
    this.shape = props.shape || 'rounded'
    this.align = props.align || 'center'
    this.tone = props.tone || 'primary'
    this.variant = props.variant || 'default'
    this.className = props.className || ''
    this.loading = props.loading || false
    this.disabled = props.disabled || false
    this.leading = props.leading
    this.trailing = props.trailing
    this.HTMLProps = this.HTMLPropsIntegration(props)
  }

  public buttonVariants() {
    return cn(
      'flex items-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 \
      disabled:opacity-50 disabled:cursor-not-allowed font-medium w-fit',
      toneClasses[this.tone][this.variant],
      sizeClasses[this.size],
      shapeClasses[this.shape],
      this.variant === 'link' && '!p-0'
    )
  }

  public alignmentClasses() {
    return `flex flex-1 ${alignmentClasses[this.align]}`
  }

  HTMLPropsIntegration(props: ButtonPropsImpl) {
    const HTMLProps: typeof this.HTMLProps = {}
    const HTMLPropsKeys = Object.keys(props).filter((prop) => !Object.keys(this).includes(prop))
    HTMLPropsKeys.forEach((specificProp) => {
      const value = props[specificProp as keyof ButtonPropsImpl]
      Object.assign(HTMLProps, {[specificProp]: value})
    })
    HTMLProps['disabled'] = props.loading || props['disabled']
    return HTMLProps
  }
}
