import {Feature} from '@/models/feature.model'
import Image from 'next/image'

type FeatureCardProps = {
  feature: Feature
}

export default function FeatureCard({feature}: FeatureCardProps) {
  return (
    <div
      key={feature.name}
      className='w-full p-6 h-80 bg-primary-500'>
      <Image
        {...feature.icon}
        alt={feature.name}
        className='w-auto h-10 mb-2'
      />
      <div className='text-xl font-semibold leading-7 text-white title'>
        <span className='capitalize'>{feature.name}</span>
      </div>
      <p className='mt-2 overflow-hidden text-base leading-7 text-gray-100'>{feature.description}</p>
    </div>
  )
}
