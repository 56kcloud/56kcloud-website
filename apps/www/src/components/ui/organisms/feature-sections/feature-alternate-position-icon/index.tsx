import {ArrowLongRightIcon} from '@heroicons/react/24/solid'
import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Icon from '@/components/ui/atoms/icon'
import Link from 'next/link'

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
                <div className={cn('flex flex-row items-center gap-x-10', index % 2 !== 0 ? 'flex-row-reverse' : '')}>
                  <div>
                    <Icon
                      {...feature.icon}
                      className='w-auto h-52'
                      strokeWidth={0.75}
                      stroke='#7dd3fc'
                    >
                    </Icon>
                  </div>
                  <div className='flex flex-col gap-y-2'>
                    <dt className='text-3xl font-medium text-white sm:text-3xl'>
                      {feature.title}
                    </dt>
                    <dd className='text-[18px] leading-8 text-slate-400 font-light'>
                      <p>{feature.description}</p>
                    </dd>
                    <Button
                      asChild
                      size='large'
                      variant='link'
                      className='mt-1 text-lg text-sky-300 hover:text-violet-300'
                      leading={<ArrowLongRightIcon className='w-8 h-8'/>}
                    >
                      <Link href={feature.link}>
                        Learn more
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
