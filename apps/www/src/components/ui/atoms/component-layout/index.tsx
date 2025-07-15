import {cn} from '@/utils/toolbox'
import FloatingGradientLeft from '../../svgs/gradients/floating-gradient/floating-gradient-left'
import FloatingGradientRight from '../../svgs/gradients/floating-gradient/floating-gradient-right'
import HeroGradient from '../../svgs/gradients/hero-gradient'
import React from 'react'

export type ComponentLayoutProps = {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
  gradientVariant?: 'heroGradient' | 'floatingGradient'
  id?: string
}

export default function ComponentLayout(props: ComponentLayoutProps) {
  const gradient =
    props.gradientVariant === 'heroGradient' ? (
      <HeroGradient />
    ) : props.gradientVariant === 'floatingGradient' ? (
      <div className='absolute inset-0 overflow-hidden'>
        <FloatingGradientLeft className='absolute -left-20 top-0' />
        <FloatingGradientRight className='absolute -right-96 -bottom-0' />
      </div>
    ) : null

  return (
    <div
      className={cn('flex justify-center w-full relative', props.className)}
      id={props.id}
    >
      <div className={cn('max-w-7xl mx-auto w-full px-6', props.childrenClassName)}>
        {props.children}
        {gradient && <div className={cn('absolute -z-50 inset-0')}>{gradient}</div>}
      </div>
    </div>
  )
}
