import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type BasicHeroProps = {
  title: string
  subtitle: string
  image: ImageProps
}

export default function BasicHero({title, subtitle, image}: BasicHeroProps) {  
  return (
    <div className='h-[400px] relative'>
      <Image
        alt={'Background'}
        src={image.src}
        placeholder='blur'
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
        className='object-cover object-left-top w-full h-full pointer-events-none'
      />
      <div 
        className='absolute inset-0 flex flex-col items-start justify-center w-full mx-auto max-w-7xl'>
        <div className='flex flex-col justify-center w-full pl-4 sm:mt-10'>
          <h1
            className={'text-left text-primary-800 responsive-title title max-w-xl'}>
            {title}
          </h1>
          <p
            className={'text-left text-primary-800 text-base'}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
