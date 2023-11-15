import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Icon from '@/components/ui/atoms/icon'

export type FeatureOneColumnProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

const FeatureOneColumn = (props: FeatureOneColumnProps) => {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='flex flex-col justify-between lg:flex-row'>
          <div className='w-full lg:w-2/6'>
            <h2 className='text-3xl font-medium text-white sm:text-3xl'>{props.title}</h2>
            <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>
              {props.subtitle}
            </p>
          </div>
          <dl className='w-full mt-10 lg:mt-0 lg:pl-8 lg:w-3/6'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  index === props.features.length - 1 ? 'last:border-b-0 pb-0' : 'pb-7', 
                  index === 0 ? 'pt-0' : 'pt-7', 'border-b-[1px] border-slate-800')}>
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

export default FeatureOneColumn
