import {ArrowRightIcon} from '@heroicons/react/24/solid'
import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Image from 'next/image'
import Link from 'next/link'
import ComponentLayout from '@/components/ui/atoms/component-layout'

export type FeatureAlternatePositionImageProps = {
  title: string
  subtitle: string
  features: Array<Feature<'image'>>
}

export default function FeatureAlternatePositionImage(props: FeatureAlternatePositionImageProps) {
  return (
    <ComponentLayout
      className='overflow-hidden'
      gradient={true}
      gradientPosition='right'
    >
      <div className='pb-20 pt-9 lg:pb-[104px] lg:pt-[120px] space-y-10 lg:space-y-20'>
        <div className='text-center space-y-4 max-w-4xl mx-auto'>
          <h2
            className='w-fit mx-auto text-[44px] leading-[48px] font-extrabold tracking-tight text-transparent \
              bg-clip-text bg-text-gradient-gray lg:leading-[58px]'
          >
            {props.title}
          </h2>
          <p className='text-base leading-7 text-slate-400 font-light'>{props.subtitle}</p>
        </div>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3 lg:grid-rows-4'>
          {props.features?.map((feature, index) => (
            <div
              key={index}
              className={cn(
                index === 0 ? 'lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-5' : '',
                index === 1 ? 'lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3' : '',
                index === 2 ? 'lg:col-start-2 lg:col-end-4 lg:row-start-3 lg:row-end-5' : ''
              )}
            >
              <Link href={feature.link}>
                <div
                  className={cn(
                    'border border-slate-800 rounded-3xl w-full h-full flex flex-col items-start gap-x-10 gap-y-6 \
                    sm:gap-y-8 p-8 bg-gradient-to-t from-slate-800 to-slate-900',
                    index === 0 ? 'lg:flex-col' : 'lg:flex-row',
                    index % 2 !== 0 && index !== 0 ? 'lg:flex-row-reverse' : ''
                  )}
                >
                  <div className='w-full h-full'>
                    <Image
                      className='object-cover w-full h-60 rounded-xl lg:h-full'
                      src={feature.image.url}
                      width={feature.image.width}
                      height={feature.image.height}
                      alt={feature.image.alternateText || feature.image.name}
                    />
                  </div>
                  <div className='flex flex-col justify-between w-full h-full'>
                    <div className='space-y-4'>
                      <h3
                        className='text-2xl leading-7 font-semibold w-fit text-transparent bg-clip-text \
                      bg-text-gradient-blue'
                      >
                        {feature.title}
                      </h3>
                      <p className='text-sm leading-6 text-slate-400 font-light'>{feature.description}</p>
                    </div>
                    <div className='flex flex-row items-center gap-2 mt-4 ml-auto'>
                      <p className='text-sm font-normal text-slate-50'>{feature.cta}</p>
                      <ArrowRightIcon
                        className='w-4 h-4 text-sky-500'
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </ComponentLayout>
  )
}
