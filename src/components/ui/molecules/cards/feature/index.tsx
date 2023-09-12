import {Feature} from '@/models/feature.model'
import Image from 'next/image'

type FeatureCardProps = {
  feature: Feature
}

export default function FeatureCard({feature}: FeatureCardProps) {
  return (
    <div
      key={feature.name}
      className='relative pl-16'>
      <dt className='text-base font-semibold leading-7 text-gray-900'>
        <div
          className={`absolute top-0 left-0 flex items-center justify-center w-10 h-10 p-2 rounded-lg
                   bg-primary-200`}>
          <Image
            {...feature.icon}
            alt={feature.name}
          />
        </div>
        {feature.name}
      </dt>
      <dd className='mt-2 text-base leading-7 text-gray-600'>{feature.description}</dd>
    </div>
  )
}
