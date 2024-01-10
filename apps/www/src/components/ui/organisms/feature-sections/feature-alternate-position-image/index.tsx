import {ArrowLongRightIcon} from '@heroicons/react/24/solid'
import {Feature} from '@/models/feature.model'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type FeatureAlternatePositionImageProps = {
  title: string
  subtitle: string
  features: Array<Feature>
}

export default function FeatureAlternatePositionImage(props: FeatureAlternatePositionImageProps) {
  return (
    <div className='pb-20 pt-12 lg:pb-[104px] lg:pt-[120px]'>
      <div className='relative px-6 mx-auto max-w-7xl lg:px-8'>
        <dl className='grid grid-cols-1 gap-x-6 gap-y-16 lg:gap-y-36'>
          {props.features?.map((feature, index) => (
            <div
              key={index}
              className='w-full lg:max-w-5xl mx-auto'
            >
              <div
                className={cn(
                  'flex flex-col items-start lg:flex-row gap-x-10 w-full gap-y-6 sm:gap-y-10',
                  index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
                )}
              >
                <div className='w-1/2 sm:w-1/3'>
                  <Image
                    className='object-cover aspect-1 rounded-xl'
                    src={feature.image.url}
                    width={feature.image.width}
                    height={feature.image.height}
                    alt={feature.image.alternateText || feature.image.name}
                  ></Image>
                </div>
                <div className='flex flex-col gap-y-2 w-full'>
                  <dt className='text-2xl font-medium text-white sm:text-3xl'>{feature.title}</dt>
                  <dd className='text-[18px] leading-8 text-slate-400 font-light'>
                    <p>{feature.description}</p>
                  </dd>
                  <Button
                    asChild
                    size='large'
                    variant='link'
                    className='mt-1 text-lg text-sky-300 hover:text-violet-300'
                    leading={<ArrowLongRightIcon className='w-8 h-8' />}
                  >
                    <Link href={feature.link}>Learn more</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
