import {cn} from '@/utils/toolbox'
import HeroGradient from '../../svgs/gradients/hero-gradient'
import FloatingGradientRight from '../../svgs/gradients/floating-gradient/floating-gradient-right'
import React from 'react'

export type ComponentLayoutProps = {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
  gradientVariant?: 'heroGradient' | 'floatingGradient'
}

export default function ComponentLayout(props: ComponentLayoutProps) {
  const gradient =
    props.gradientVariant === 'heroGradient' ? (
      <HeroGradient />
    ) : props.gradientVariant === 'floatingGradient' ? (
      <FloatingGradientRight />
    ) : null

  return (
    <div className={cn('flex justify-center w-full relative', props.className)}>
      <div className={cn('max-w-7xl mx-auto w-full px-6', props.childrenClassName)}>
        {props.children}
        {gradient && <div className={cn('absolute -z-50 inset-0')}>{gradient}</div>}
      </div>
    </div>
  )
}
