import {Feature} from '@/models/feature.model'
import Image from 'next/image'

export type FeatureThreeColumnWithLargeIconsProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

export default function FeatureThreeColumnWithLargeIcons(props: FeatureThreeColumnWithLargeIconsProps) { 
  return (
    <div className='py-24 bg-gray-900 sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            {props.subtitle}
          </p>
        </div>
        <div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col'>
                <dt className='text-base font-semibold leading-7 text-white'>
                  <div className='flex items-center justify-center w-10 h-10 mb-6 rounded-lg bg-primary-500'>
                    <Image
                      {...feature.icon}
                      alt={feature.title}
                      className='w-auto h-6'
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className='flex flex-col flex-auto mt-1 text-base leading-7 text-gray-300'>
                  <p className='flex-auto'>{feature.description}</p>
                  <p className='mt-6'>
                    <a
                      href={feature.link}
                      className='text-sm font-semibold leading-6 text-primary-400'>
                      Learn more <span aria-hidden='true'>→</span>
                    </a>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
