import {ArrowRightIcon} from '@heroicons/react/24/solid'
import {Feature} from '@/models/feature.model'
import Image from 'next/image'
import Link from 'next/link'
import ComponentLayout from '@/components/ui/atoms/component-layout'

export type FeatureThreeColumnsWithImageProps = {
  title: string
  subtitle: string
  features: Array<Feature<'image'>>
}

export default function FeatureThreeColumnsWithImage(props: FeatureThreeColumnsWithImageProps) {
  return (
    <ComponentLayout
      gradient={true}
      gradientPosition='right'
    >
      <div className='py-20 pt-6 lg:py-[104px]'>
        <div className='px-6 mx-auto max-w-7xl space-y-10 lg:space-y-20 lg:px-8'>
          <div className='mr-auto space-y-4 max-w-4xl'>
            <h2
              className='w-fit text-[44px] leading-[48px] font-extrabold tracking-tight text-transparent bg-clip-text \
            bg-text-gradient-gray lg:leading-[58px]'
            >
              {props.title}
            </h2>
            <p className='text-base leading-7 text-slate-400 font-light'>{props.subtitle}</p>
          </div>
          <div className='mt-11'>
            <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
              {props.features?.map((feature, index) => (
                <Link
                  key={index}
                  href={feature.link}
                >
                  <div className='relative border border-slate-800 rounded-3xl w-full h-[528px] overflow-hidden'>
                    <div className='relative w-full h-full overflow-hidden'>
                      <Image
                        className='object-cover w-full h-full rounded-xl'
                        src={feature.image.url}
                        width={feature.image.width}
                        height={feature.image.height}
                        alt={feature.image.alternateText || feature.image.name}
                      />
                      <div
                        className='w-full h-full absolute left-0 bottom-0 bg-gradient-to-b from-slate-900/0 from-25% \
                      via-slate-900 via-[58%] to-slate-900'
                      />
                    </div>
                    <div className='absolute left-0 bottom-0 flex flex-col p-8 pt-0'>
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
              ))}
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
