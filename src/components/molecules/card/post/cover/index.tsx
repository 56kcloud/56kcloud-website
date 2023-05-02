import {Logo} from '@/components/svgs/logos/56k'
import {cn} from '@/utils/classes'
import {motion} from 'framer-motion'
import {useEffect, useRef, useState} from 'react'
import Image from 'next/image'

export default function PostCover({postId, src='', alt, className='', animate=false}) {
  const [isLoaded, setIsLoaded] = useState(false)
  
  const [height, setHeight] = useState('200px')
  const coverParent = useRef(null)

  useEffect(() => {
    const parentWidth = coverParent.current?.offsetWidth
    const [width, height] = src.substring(src.lastIndexOf('-')+1, src.lastIndexOf('.')).split('x')
    if (parentWidth) {
      if (coverParent.current.style.height !== height) {
        setHeight(`${parentWidth * (parseInt(height)/parseInt(width))}px`)
      }
    }
  }, [])

  return (
    <motion.div
      layout
      layoutId={`cover-${postId}`}
      className={cn('relative w-full', className)}
      transition={{
        layout: {
          duration: animate ? 0.2 : 0
        }
      }}
      ref={coverParent}
      style={{height}}
    >
      {!isLoaded 
        ? <div className='flex items-center justify-center w-full h-full p-10 bg-gray-50 animate-pulse grayscale'>
          <Logo className='w-32 text-gray-100'/>
        </div>
        : null
      }
      <Image
        src={src}
        alt={alt}
        onLoadingComplete={() => {setIsLoaded(true)}}
        fill
        className={cn('object-cover')}
      />
    </motion.div>
  )

}
