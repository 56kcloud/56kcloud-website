import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type HomeHeroProps = {
  titleLine1: string
  titleLine2: string
  titleLine3: string
  image: ImageProps
}

export default function HomeHero({titleLine1, titleLine2, titleLine3, image}: HomeHeroProps) {  
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
        className='title font-semibold absolute left-[41%] bottom-[40%] z-10 sm:bottom-[43%] sm:left-[46%] \
        md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1
          className='leading-none sm-responsive-title sm:md-responsive-title md:lg-responsive-title \
          lg:xl-responsive-title'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
    </div>
  )
}
