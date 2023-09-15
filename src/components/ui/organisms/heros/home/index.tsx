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
        className='w-full pointer-events-none opacity-70'/>
      <div 
        className='absolute inset-0 flex flex-col items-center justify-center title'>
        <h1 className='mx-10 mt-4 mb-8 text-4xl text-center text-black sm:mb-20 sm:mx-40'>
          {title}
        </h1>
        <Button
          tone='primary'
        >
          <Link href={button.href}>
            {button.title}
          </Link>
        </Button>
      </div>
    </div>
  )
}
