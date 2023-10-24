import {ImageProps} from '@/models/image.model'
import {Logo} from '@/components/ui/svgs/logos/56k'
import {cn} from '@/utils/toolbox'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'

type CardCoverProps = {
  image: ImageProps
  sameHeight?: boolean
}

export default function CardCover({image, sameHeight}: CardCoverProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  const [height, setHeight] = useState('200px')
  const coverParent = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const parentWidth = coverParent.current?.offsetWidth
    const {width, height} = image
    if (parentWidth) {
      if (coverParent.current && parseInt(coverParent.current.style.height) !== height) {
        setHeight(`${parentWidth * (height/width)}px`)
      }
    }
  }, [])

  return (
    <div
      className='relative w-full rounded-lg max-h-96 bg-red-50'
      ref={coverParent}
      style={{height: sameHeight ? '200px' : `${image.width * (parseInt(height)/image.width)}px`}}
    >
      {!isLoaded
        ? <div className='flex items-center justify-center w-full h-full p-10 bg-white/10 animate-pulse grayscale'>
          <Logo className='w-32 text-gray-900'/>
        </div>
        : null
      }
      <Image
        src={image.src}
        alt={image.alt || 'post-cover'}
        onLoadingComplete={() => {setIsLoaded(true)}}
        fill
        className={cn('object-cover bg-white')}
      />
    </div>
  )
}
