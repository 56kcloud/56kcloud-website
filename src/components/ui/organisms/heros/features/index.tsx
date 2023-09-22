import {Feature} from '@/models/feature.model'
import {ImageProps} from '@/models/image.model'
import FeatureCard from '@/components/ui/molecules/cards/feature'
import Image from 'next/image'

export type BasicHeroProps = {
  title: string
  subtitle: string
  image: ImageProps
  features: Array<Feature>
}

export default function FeaturesHero({title, subtitle, image, features}: BasicHeroProps) {  
  return (
    <div className='mb-28'>
      <div className='h-[600px] bg-primary-100 w-full relative'>
        <Image
          alt={'Background'}
          src={image.src}
          placeholder='blur'
          blurDataURL={image.blurDataURL}
          width={image.width}
          height={image.height}
          className='object-cover w-full h-full pointer-events-none'
        />
        <div 
          className='absolute inset-0 flex flex-col items-start justify-center w-full mx-auto max-w-7xl'>
          <div className='flex flex-col justify-center w-full pl-4'>
            <h1
              className={'text-left text-primary-800 text-7xl title max-w-2xl'}>
              {title}
            </h1>
            <p
              className={'text-left text-primary-800 text-base w-96'}>
              {subtitle}
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center w-full h-auto px-4 -mt-16'>
        <div className='z-40 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4 max-w-7xl'>
          {features?.map((feature) => (
            <FeatureCard
              key={feature.name}
              feature={feature}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
