import {ImageProps} from '@/models/image.model'
import {LinkProps} from '@/models/link.model'
import {MoveDown} from 'lucide-react'
import {cn} from '@/utils/toolbox'
import {useEffect, useState} from 'react'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type HomeHeroProps = {
  title: string
  button: LinkProps
  image: ImageProps
}

export default function HomeHero({title, button, image}: HomeHeroProps) {
  const [hideScrollBar, setHideScrollBar] = useState(true)

  function handleScroll(e: Event) {
    const scroll = (e.target as Document)?.scrollingElement?.scrollTop || 0
    setHideScrollBar(scroll > 0)
  }

  function handleResize() {
    if (window.innerHeight >= 1300 && window.innerWidth > 1500) {
      setHideScrollBar(false)
    } else if (window.innerHeight > 1300 || window.innerHeight < 900) {
      setHideScrollBar(true)
    }    
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className='relative overflow-hidden bg-white'>
      <Image
        alt={'Team background'}
        src={image.src}
        placeholder='blur'
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
        className='w-full pointer-events-none'/>
      <div 
        className='absolute inset-0 flex flex-col items-center justify-center space-y-10 xl:justify-start xl:top-72'>
        <div className='flex flex-col items-center space-y-10 max-w-7xl'>
          <h1
            className={`mx-10 my-4 mt-20 text-xl text-center text-white sm:mx-30 sm:mt-10 sm:text-3xl md:text-5xl 
          lg:text-6xl xl:text-7xl title`}>
            {title}
          </h1>
          <Button
            size='small'
            tone='primary'
          >
            <Link href={button.href}>
              {button.children}
            </Link>
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'fixed items-center justify-center w-full flex bottom-24',
          hideScrollBar && 'hidden'
        )}>
        {/* <Arrow className='text-white w-14 h-14 animate-bounce'/> */}
        <MoveDown className='text-white stroke-1 w-14 h-14 animate-bounce'/>
      </div>
    </div>
  )
}
