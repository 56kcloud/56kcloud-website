'use client'

import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'
import Logo from '@/components/ui/svgs/logos/56k'

export type CardCoverProps = {
  image: ImageProps
  className?: string
  fixedHeight?: boolean
}

export default function CardCover({image, fixedHeight, className}: CardCoverProps) {
  const maxFixedHeight = '200px'
  const [isLoaded, setIsLoaded] = useState(false)
  const [height, setHeight] = useState(maxFixedHeight)
  const coverParent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parentWidth = coverParent.current?.offsetWidth
    const {width, height} = image
    if (parentWidth) {
      if (coverParent.current && parseInt(coverParent.current.style.height) !== height) {
        setHeight(`${parentWidth * (height / width)}px`)
      }
    }
  }, [])

  return (
    <div
      className={cn('relative w-full h-full overflow-hidden rounded-xl', className)}
      ref={coverParent}
      style={{height: fixedHeight ? maxFixedHeight : `${image.width * (parseInt(height) / image.width)}px`}}
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
        placeholder='blur'
        blurDataURL={image.placeholder}
        fill
        className={cn('object-cover', isLoaded && 'bg-white')}
      />
    </div>
  )
}
