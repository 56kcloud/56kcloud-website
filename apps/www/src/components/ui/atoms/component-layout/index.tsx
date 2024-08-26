import {cn} from '@/utils/toolbox'
import FloatingGradientLeft from '../../svgs/gradients/floating-gradient/floating-gradient-left'
import FloatingGradientRight from '../../svgs/gradients/floating-gradient/floating-gradient-right'
import React from 'react'

export type ComponentLayoutProps = {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
  gradient?: boolean
  gradientPosition?: 'left' | 'right'
}

export default function ComponentLayout(props: ComponentLayoutProps) {
  const gradient = props.gradient ? (
    props.gradientPosition === 'left' ? (
      <FloatingGradientLeft />
    ) : (
      <FloatingGradientRight />
    )
  ) : null

  return (
    <div className={cn('flex justify-center w-full overflow-visible relative', props.className)}>
      <div className={cn('max-w-7xl mx-auto w-full px-6', props.childrenClassName)}>
        {props.children}
        {props.gradient && (
          <div className={cn('absolute', props.gradientPosition === 'left' ? 'inset-0' : 'top-0 right-0')}>
            {gradient}
          </div>
        )}
      </div>
    </div>
  )
}
