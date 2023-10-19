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
    <div className='relative w-full h-screen overflow-hidden bg-white 2xl:h-auto'>
      <Image
        alt={'Team background'}
        src={image.src}
        placeholder='blur'
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
        className='object-cover w-full h-full pointer-events-none 2xl:object-fill'/>
      <div 
        className='absolute inset-0 flex flex-col items-center justify-center max-h-screen -mt-16 space-y-10 xl:mt-0'
      >
        <div className='flex flex-col items-center space-y-10 max-w-7xl'>
          <h1
            className={'mx-10 my-4 mt-20 text-center text-white sm:mx-30 sm:mt-10 responsive-title title'}>
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
        <MoveDown className='text-white stroke-1 w-14 h-14 animate-bounce'/>
      </div>
    </div>
  )
}
