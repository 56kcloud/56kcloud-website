import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type BasicHeroProps = {
  title: string
  subtitle: string
  image: ImageProps
}

export default function BasicHero({title, subtitle, image}: BasicHeroProps) {  
  return (
    <div className='h-[400px] bg-white relative'>
      <Image
        alt={'Background'}
        src={image.src}
        placeholder='blur'
        blurDataURL={image.blurDataURL}
        width={image.width}
        height={image.height}
        className='pointer-events-none'
      />
      <div 
        className='absolute inset-0 flex flex-col items-start justify-center w-full mx-auto max-w-7xl'>
        <div className='flex flex-col items-center w-full pr-4 xl:items-start'>
          <h1
            className={'text-center xl:text-left text-primary-800 text-7xl title'}>
            {title}
          </h1>
          <p
            className={'text-center xl:text-left text-primary-800 text-base title'}>
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  )
}
