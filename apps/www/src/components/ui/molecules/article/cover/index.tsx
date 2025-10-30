'use client'

import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import {useState} from 'react'
import Image from 'next/image'
import Logo from '@/components/ui/svgs/logos/56k'

export type ArticleCoverProps = {
  image: ImageProps
  className?: string
}

export default function ArticleCover({image, className}: ArticleCoverProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className={cn('relative w-full overflow-hidden rounded-t-xl min-h-[200px] max-h-96', className)}
      style={{height: `${image.height}px`}}
    >
      {!isLoaded ? (
        <div className='flex items-center justify-center w-full h-full p-10 bg-white/10 animate-pulse grayscale'>
          <Logo className='w-32 text-gray-900' />
        </div>
      ) : null}
      <Image
        src={image.url}
        alt={image.alternateText || image.name}
        onLoad={() => {
          setIsLoaded(true)
        }}
        fill
        fetchPriority='high'
        loading='eager'
        placeholder='empty'
        className={cn('object-cover w-full', isLoaded && 'bg-white')}
      />
    </div>
  )
}
