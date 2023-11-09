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
        className='flex flex-col gap-x-8 justify-between px-6 pt-32 pb-20 mx-auto lg:flex-row max-w-7xl lg:py-28 \
        lg:pt-56 lg:pb-20 gap-y-24'>
        <div className='w-full lg:w-3/5'>
          <div className='max-w-none lg:max-w-[700px]'>
            <h1
              className='text-4xl font-normal text-transparent bg-clip-text bg-gradient-to-l from-purple-300 \
            via-sky-300 to-purple-300 sm:text-[60px] sm:leading-[64px] from-10% to-90%'>
              {props.title}
            </h1>
            <p className='mt-6 text-lg font-light leading-8 sm:text-[24px] sm:leading-[34px] text-slate-400'>
              {props.subtitle}
            </p>
            <div className='flex items-center justify-start mt-10 gap-x-6'>
              {props.leftCTA.text
                ? <Button
                  asChild
                  size='large'
                  tone={props.leftCTA.tone}
                  shape='circle'
                  className='px-5 text-md bg-sky-300 text-slate-900 hover:bg-purple-300'
                >
                  <Link href={props.leftCTA.link}>
                    {props.leftCTA.text}
                  </Link>
                </Button>
                : null
              }
              {props.rightCTA.text
                ? <Button
                  asChild
                  size='large'
                  variant='link'
                  tone={props.rightCTA.tone}
                >
                  <Link href={props.rightCTA.link}>
                    {props.rightCTA.text}
                  </Link>
                </Button>
                : null}
            </div>
          </div>
        </div>
        <div className='w-full lg:w-2/5'>
          <div className='relative overflow-hidden rounded-xl aspect-w-10 aspect-h-6 lg:aspect-h-8'>
            <Image
              alt={'Background'}
              src={props.image.src}
              placeholder='blur'
              blurDataURL={props.image.blurDataURL}
              width={props.image.width}
              height={props.image.height}
              className='object-cover object-center'
            />
            <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b from-sky-300/30 to-purple-300/60'/>
          </div>
        </div>
      </div>
    </div>
  )
}

