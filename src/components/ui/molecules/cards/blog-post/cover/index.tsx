import {ImageProps} from '@/models/image.model'
import {Logo} from '@/components/ui/svgs/logos/56k'
import {cn} from '@/utils/toolbox'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'

type BlogPostCoverProps = {
  image: ImageProps
}

export default function BlogPostCover({image}: BlogPostCoverProps) {
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
      className={cn('relative w-full rounded-lg')}
      ref={coverParent}
      style={{height: `${image.width * (parseInt(height)/image.width)}px`}}
    >
      {!isLoaded 
        ? <div className='flex items-center justify-center w-full h-full p-10 bg-gray-50 animate-pulse grayscale'>
          <Logo className='w-32 text-gray-100'/>
        </div>
        : null
      }
      <Image
        src={image.src}
        alt={image.alt || 'post-cover'}
        onLoadingComplete={() => {setIsLoaded(true)}}
        fill
        className={cn('object-cover')}
      />
    </div>
  )
}
