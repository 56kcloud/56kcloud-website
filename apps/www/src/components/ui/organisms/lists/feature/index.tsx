import {Feature} from '@/models/feature.model'
import FeatureCard from '@/components/ui/molecules/cards/feature'

type FeatureListProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

export default function FeatureList({title, subtitle, features}: FeatureListProps) {
  return (
    <div>
      <div className='px-6 mx-auto lg:px-8'>
        <div className='max-w-2xl mx-auto lg:text-center'>
          {title
            ? <p className='mt-2 text-3xl font-bold tracking-tight capitalize sm:text-4xl title'>
              {title}
            </p>
            : null
          }
          {subtitle 
            ? <p className='mt-6 text-lg leading-8 text-gray-600'>
              {subtitle}
            </p>
            : null
          }
        </div>
        <div className='max-w-2xl mx-auto mt-16 sm:mt-20 lg:mt-24 lg:max-w-4xl'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16'>
            {features.map((feature) => (
              <FeatureCard
                feature={feature}
                key={feature.name}
              />
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
