import {ArrowLongRightIcon} from '@heroicons/react/24/solid'
import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Icon from '@/components/ui/atoms/icon'
import Link from 'next/link'

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
            <h2 className='text-2xl font-medium text-white sm:text-3xl'>{props.title}</h2>
            <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>
              {props.subtitle}
            </p>
          </div>
          <dl className='flex flex-col w-full mt-16 lg:mt-0 lg:w-3/6'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  index === props.features.length - 1 ? 'last:border-b-0 pb-0' : 'pb-7', 
                  index === 0 ? 'pt-0' : '', 'border-b-[1px] border-slate-800 pt-7')}>
                <dt className='flex flex-row items-center text-lg font-normal text-white gap-x-4'>
                  <div className='flex items-center justify-center w-8 h-8 rounded-lg'>
                    <Icon
                      {...feature.icon}
                      className='w-auto h-16'
                    />
                  </div>
                  {feature.title}
                </dt>
                <dd className='flex flex-col flex-auto mt-1 text-base font-light leading-[26px] text-slate-400'>
                  <p className='flex-auto'>{feature.description}</p>
                </dd>
                <Button
                  asChild
                  size='large'
                  variant='link'
                  className='mt-1 text-base text-sky-300 hover:text-violet-300'
                  leading={<ArrowLongRightIcon className='w-7 h-7'/>}
                >
                  <Link href={feature.link}>
                        Learn more
                  </Link>
                </Button>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FeatureOneColumn
