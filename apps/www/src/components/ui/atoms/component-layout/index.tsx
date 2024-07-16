import {cn} from '@/utils/toolbox'
import React from 'react'

export type ComponentLayoutProps = {
  children: React.ReactNode
  className?: string
  childrenClassName?: string
  floatingGradients?: React.ReactNode[]
}

export default function ComponentLayout(props: ComponentLayoutProps) {
  return (
    <div
      className={cn(
        'flex justify-center w-full overflow-visible',
        !props.floatingGradients && 'relative',
        props.className
      )}
    >
      <div
        className={cn('max-w-7xl mx-auto w-full px-6', props.floatingGradients && 'relative', props.childrenClassName)}
      >
        {props.children}
        {props.floatingGradients && (
          <div className='absolute inset-0'>{props.floatingGradients?.map((gradient) => gradient)}</div>
        )}
      </div>
    </div>
  )
}
