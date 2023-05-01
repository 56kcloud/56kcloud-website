import {Logo} from '@/components/svgs/logos/56k'
import {cn} from '@/utils/classes'
import {motion} from 'framer-motion'
import {useRef, useState} from 'react'
import Image from 'next/image'

export default function PostCover({postId, src, alt, className='', test=false}) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [height, setHeight] = useState('200px')
  const coverParent = useRef(null)

  function updateCoverHeight(aspectRatio: number) {
    const parentWidth = coverParent.current?.offsetWidth
    console.log(parentWidth * aspectRatio)
    if (parentWidth) {
      // if (coverParent.current.style.height !== height) {
      setHeight(`${parentWidth * aspectRatio}px`)
      // }
      setIsLoaded(true)
    }
  }

  return (
    <motion.div
      layout
      layoutId={`cover-${postId}`}
      className={cn('relative w-full', className)}
      transition={{
        layout: {
          duration: test ? 0.1 : 0.2
        }
      }}
      ref={coverParent}
      style={{height}}
    >
      {JSON.stringify(test)}
      {!isLoaded 
        ? <div className='flex items-center justify-center w-full h-full p-10 bg-gray-50 animate-pulse grayscale'>
          <Logo className='w-32 text-gray-100'/>
        </div>
        : null
      }
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={(e) => {
          updateCoverHeight(e.naturalHeight/e.naturalWidth)
        }}
        fill
        className={cn('object-cover')}
      />
    </motion.div>
  )

}
