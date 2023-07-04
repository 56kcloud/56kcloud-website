export const buttonSizes = ['small', 'medium', 'large'] as const
export const buttonShapes = ['square', 'rounded', 'circle'] as const
export const buttonVariants = ['default', 'link', 'ghost'] as const
export const buttonTones = ['primary', 'secondary', 'error', 'warning', 'alert', 'success'] as const
export const buttonAlignments = ['start', 'center', 'end'] as const

const toneClasses: Record<typeof buttonTones[number], Record<typeof buttonVariants[number], string>> = {
  primary: {
    default: `text-white bg-primary-800 hover:bg-primary-700 focus-visible:ring-primary-800
     focus-visible:outline-primary-600 dark:bg-white dark:text-primary-800
     dark:hover:bg-white/90 dark:focus-visible:ring-white focus-visible:outline-white`,
    link: `text-primary-800 hover:underline hover:bg-gray-50 focus-visible:outline-primary-600 focus-visible:underline
     dark:text-white dark:hover:text-primary-800 dark:focus-visible:ring-white focus-visible:outline-white`,
    ghost: `text-primary-800 hover:bg-primary-50 focus-visible:outline-primary-600 dark:text-white 
    dark:hover:text-primary-800 dark:focus-visible:ring-white focus-visible:outline-white`
  },
  secondary: {
    default: `text-white bg-secondary-500 hover:bg-secondary-600 focus-visible:ring-secondary-500
     focus-visible:outline-secondary-600`,
    link: `text-secondary-500 hover:underline hover:bg-gray-50 focus-visible:outline-secondary-600
     focus-visible:underline dark:hover:bg-gray-800/40`,
    ghost: 'text-secondary-500 hover:bg-secondary-50 dark:hover:bg-secondary-800/20 focus-visible:outline-secondary-600'
  },
  error: {
    default: 'text-white bg-error-500 hover:bg-error-600 focus-visible:ring-error-500 focus-visible:outline-error-600',
    link: `text-error-500 hover:underline hover:bg-gray-50 focus-visible:outline-error-600 focus-visible:underline
     dark:hover:bg-gray-800/40`,
    ghost: 'text-error-500 hover:bg-error-50 dark:hover:bg-error-800/20 focus-visible:outline-error-600'
  },
  warning: {
    default: `text-white bg-warning-500 hover:bg-warning-600 focus-visible:ring-warning-500
     focus-visible:outline-warning-600`,
    link: `text-warning-500 hover:underline hover:bg-gray-50 focus-visible:outline-warning-600 focus-visible:underline
     dark:hover:bg-gray-800/40`,
    ghost: 'text-warning-500 hover:bg-warning-50 dark:hover:bg-warning-800/20 focus-visible:outline-warning-600'
  },
  alert: {
    default: 'text-white bg-alert-500 hover:bg-alert-600 focus-visible:ring-alert-500 focus-visible:outline-alert-600',
    link: `text-alert-500 hover:underline hover:bg-gray-50 dark:hover:bg-gray-800/40 focus-visible:outline-alert-600
     focus-visible:underline`,
    ghost: 'text-alert-500 hover:bg-alert-50 dark:hover:bg-alert-800/20 focus-visible:outline-alert-600'
  },
  success: {
    default: `text-white bg-success-500 hover:bg-success-600 focus-visible:ring-success-500 
    focus-visible:outline-success-600`,
    link: `text-success-500 hover:underline hover:bg-gray-50 dark:hover:bg-gray-800/40 focus-visible:outline-success-600
     focus-visible:underline`,
    ghost: 'text-success-500 hover:bg-success-50 dark:hover:bg-success-800/20 focus-visible:outline-success-600'
  }
}

const sizeClasses: Record<typeof buttonSizes[number], string> = {
  small: 'px-2.5 py-1.5',
  medium: 'px-3 py-2',
  large: 'px-3.5 py-2.5'
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

export type ButtonPropsImpl = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean
  size?: typeof buttonSizes[number]
  shape?: typeof buttonShapes[number]
  align?: typeof buttonAlignments[number]
  tone?: typeof buttonTones[number]
  variant?: typeof buttonVariants[number]
  width?: number | 'auto'
  loading?: boolean
  leading?: React.ReactNode
  trailing?: React.ReactNode
}

export class ButtonProps {
  children: React.ReactNode
  asChild: boolean
  size: typeof buttonSizes[number]
  shape: typeof buttonShapes[number]
  align: typeof buttonAlignments[number]
  tone: typeof buttonTones[number]
  variant: typeof buttonVariants[number]
  width: number | 'auto'
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
    this.width = props.width || 'auto'
    this.className = props.className || ''
    this.loading = props.loading || false
    this.disabled = props.disabled || false
    this.leading = props.leading
    this.trailing = props.trailing  
    this.HTMLProps = this.HTMLPropsIntegration(props)
  }
  

  public buttonVariants() {
    let classes = `flex text-sm focus-visible:outline focus-visible:outline-2
    focus-visible:outline-offset-2 flex items-center
    disabled:border disabled:cursor-not-allowed disabled:bg-gray-200/20 disabled:bg-gray-200/20
    disabled:text-gray-400 disabled:border-gray-200
    disabled:dark:bg-gray-50/5 disabled:dark:hover:bg-gray-50/5 disabled:dark:text-gray-50/20
    disabled:dark:border-gray-50/20`
    classes += ` ${toneClasses[this.tone][this.variant]}`
    classes += ` ${sizeClasses[this.size]}`
    classes += ` ${shapeClasses[this.shape]}`
    return classes
  }

  public alignmentClasses() {
    return `flex flex-1 ${alignmentClasses[this.align]}`
  }

  HTMLPropsIntegration(props: ButtonPropsImpl) {
    const HTMLProps: typeof this.HTMLProps = {}
    const HTMLPropsKeys = Object.keys(props).filter(prop => !Object.keys(this).includes(prop))
    HTMLPropsKeys.forEach(specificProp => {
      const value = props[specificProp as keyof ButtonPropsImpl]
      Object.assign(HTMLProps , {[specificProp]: value})
    })
    HTMLProps['disabled'] = props.loading || props['disabled']
    return HTMLProps
  }
}
