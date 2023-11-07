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
    <div className='relative pt-20 overflow-hidden isolate'>
      <div className='flex justify-between px-6 py-32 mx-auto max-w-7xl sm:py-48 lg:py-56'>
        <div className='max-w-[625px]'>
          <h1 className='text-4xl font-normal text-white sm:text-[60px] sm:leading-[64px]'>
            {props.title}
          </h1>
          <p className='mt-6 text-lg font-light leading-8 sm:text-[24px] sm:leading-[34px] text-slate-400'>
            {props.subtitle}
          </p>
          <div className='flex items-center justify-center mt-10 gap-x-6'>
            {props.leftCTA.text
              ? <Button
                asChild
                size='large'
                tone={props.leftCTA.tone}
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
        <Image
          alt={'Background'}
          src={props.image.src}
          placeholder='blur'
          blurDataURL={props.image.blurDataURL}
          width={props.image.width}
          height={props.image.height}
          className='rounded-xl max-w-[525px] max-h-[390px] aspect-1 object-cover object-center'
        />
      </div>
    </div>
  )
}

