import {CTAProps} from '@/models/cta.model'
import {ImageProps} from '@/models/image.model'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type SimpleCenteredWithBackgroundProps = {
  title: string
  subtitle: string
  image: ImageProps
  leftCTA: CTAProps
  rightCTA: CTAProps
}

export default function HeroSimpleCenterWithBackground(props: SimpleCenteredWithBackgroundProps) {
  return (
    <div className='relative overflow-hidden pt-28 isolate'>
      <div
        className='relative flex flex-col justify-between px-6 pb-20 mx-auto gap-x-8 pt-14 sm:pt-32 lg:flex-row \
        max-w-7xl lg:py-28 lg:pt-48 lg:pb-20 gap-y-14'
      >
        <div className='w-full lg:w-3/5'>
          <div className='max-w-none lg:max-w-[700px]'>
            <h1
              className='text-[44px] leading-[48px] font-normal text-transparent bg-clip-text bg-gradient-to-l \
              from-violet-300 via-sky-300 to-violet-300 sm:text-[60px] sm:leading-[64px] from-10% to-90%'
            >
              {props.title}
            </h1>
            <p className='mt-6 text-xl font-light leading-8 sm:text-[24px] sm:leading-[34px] text-slate-400'>
              {props.subtitle}
            </p>
            <div className='flex items-center justify-start mt-10 gap-x-6'>
              {props.leftCTA ? (
                <Button
                  asChild
                  size='large'
                  tone={props.leftCTA.tone}
                  shape='circle'
                  className='px-5 bg-transparent border-2 border-sky-300 text-sky-300 text-md \
                  hover:border-violet-300 hover:bg-transparent hover:text-violet-300'
                >
                  <Link href={props.leftCTA.link}>{props.leftCTA.text}</Link>
                </Button>
              ) : null}
              {props.rightCTA ? (
                <Button asChild size='large' variant='link' tone={props.rightCTA.tone}>
                  <Link href={props.rightCTA.link}>{props.rightCTA.text}</Link>
                </Button>
              ) : null}
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <div className='relative lg:w-full h-96'>
            <Image
              alt={'Background'}
              src={props.image.url}
              placeholder='blur'
              blurDataURL={props.image.placeholder}
              width={props.image.width}
              height={props.image.height}
              className='object-cover h-full rounded-xl'
            />
            <div
              className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-sky-300/20 to-purple-300/30 \
             rounded-xl'
            />
            <div
              className='absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-300/0 from-10% \
            via-sky-300 to-sky-300/0 to-90%'
            />
            <div
              className='absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-sky-300/0 from-10% \
            via-sky-300 to-sky-300/0 to-90%'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
