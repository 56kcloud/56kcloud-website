import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Icon from '@/components/ui/atoms/icon'

export type FeatureThreeColumnWithLargeIconsProps = {
  title: string
  subtitle: string
  titleAlignment?: 'left' | 'center'
  features: Array<Feature>
}

export default function FeatureThreeColumnWithLargeIcons({title, subtitle, features, titleAlignment = 'center'}:
 FeatureThreeColumnWithLargeIconsProps) {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div
          className={cn(
            titleAlignment === 'center' ? 'justify-center' : 'justify-start',
            'flex w-full')}>
          <div
            className={cn(
              titleAlignment === 'center' ? 'text-center' : 'text-left',
              'max-w-2xl mr-auto lg:max-w-3xl lg:mx-0')}>
            <h2 className='text-3xl font-medium text-white sm:text-4xl'>{title}</h2>
            <p className='mt-8 text-[20px] leading-8 text-slate-400 font-light'>
              {subtitle}
            </p>
          </div>
        </div>
        <div className='mt-11'>
          <dl className='grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3'>
            {features?.map((feature, index) => (
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
