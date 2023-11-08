import {Feature} from '@/models/feature.model'
import Icon from '@/components/ui/atoms/icon'

export type FeatureThreeColumnWithLargeIconsProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

export default function FeatureThreeColumnWithLargeIcons(props: FeatureThreeColumnWithLargeIconsProps) { 
  return (
    <div className='py-24 sm:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-3xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-medium text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-8 text-[20px] leading-8 text-slate-400 font-light'>
            {props.subtitle}
          </p>
        </div>
        <div className='max-w-2xl mx-auto mt-11 lg:max-w-none'>
          <dl className='grid max-w-xl grid-cols-1 gap-x-6 gap-y-16 lg:max-w-none lg:grid-cols-3'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col p-6 border border-slate-800 rounded-xl'>
                <a href={feature.link}>
                  <dt className='text-lg font-normal text-white'>
                    <div className='flex items-center justify-center w-8 h-8 mb-6 rounded-lg'>
                      <Icon
                        {...feature.icon}
                        className='w-auto h-8 fill-sky-300'
                      />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className='flex flex-col flex-auto mt-1 text-base font-light leading-[26px] text-slate-400'>
                    <p className='flex-auto'>{feature.description}</p>
                  </dd>
                </a>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
