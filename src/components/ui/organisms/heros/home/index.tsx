import {ImageProps} from '@/models/image.model'
import {LinkProps} from '@/models/link.model'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type HomeHeroProps = {
  title: string
  button: LinkProps
  image: ImageProps
}

export default function HomeHero({title, button, image}: HomeHeroProps) {  
  return (
    <div className='relative pt-24 overflow-hidden bg-white sm:pt-0'>
      <Image
        alt={'Train background'}
        src={image.src}
        placeholder='blur'
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
        className='w-full pointer-events-none'/>
      <div 
        className='absolute inset-0 flex flex-col items-center justify-center title'>
        <h1
          className={`mx-10 my-4 mt-20 text-xl text-center text-white sm:mx-30 sm:mt-10 sm:text-3xl md:text-5xl 
          lg:text-6xl xl:text-7xl 2xl:text-8xl`}>
          {title}
        </h1>
        <Button
          tone='primary'
          size='small'
          className='p-2 mt-8 text-xs/3 lg:mt-20'
        >
          <Link href={button.href}>
            {button.title}
          </Link>
        </Button>
      </div>
    </div>
  )
}
