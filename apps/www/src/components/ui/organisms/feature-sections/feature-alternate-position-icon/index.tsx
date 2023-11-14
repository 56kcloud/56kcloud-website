import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Icon from '@/components/ui/atoms/icon'

export type FeatureAlternatePositionIconProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

export default function FeatureAlternatePositionIcon(props: FeatureAlternatePositionIconProps) { 
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='mt-11'>
          <dl className='grid grid-cols-1 gap-x-6 gap-y-36'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className='max-w-5xl mx-auto'>
                <a href={feature.link}>
                  <div className={cn('flex flex-row gap-x-14', index % 2 !== 0 ? 'flex-row-reverse' : '')}>
                    <div>
                      <Icon
                        {...feature.icon}
                        className='w-auto h-48 text-sky-300'
                      />
                    </div>
                    <div>
                      <dt className='text-3xl font-medium text-white sm:text-4xl'>
                        {feature.title}
                      </dt>
                      <dd className='mt-2 text-[20px] leading-8 text-slate-400 font-light'>
                        <p>{feature.description}</p>
                      </dd>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
