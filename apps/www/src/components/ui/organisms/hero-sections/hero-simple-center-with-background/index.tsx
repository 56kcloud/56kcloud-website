import {CTAProps} from '@/models/cta.model'
import {ImageProps} from '@/models/image.model'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type SimpleCenteredWithBackgroundProps = {
  title: string
  subtitle: string
  image: ImageProps
  primaryCTA: CTAProps
  secondaryCTA: CTAProps
}

export default function HeroSimpleCenterWithBackground(props: SimpleCenteredWithBackgroundProps) {  
  return (
    <div className='relative overflow-hidden isolate pt-14'>
      <Image
        alt={'Background'}
        src={props.image.src}
        placeholder='blur'
        blurDataURL={props.image.blurDataURL}
        width={props.image.width}
        height={props.image.height}
        className='absolute inset-0 object-cover w-full h-full -z-10'
      />
      <div
        className='absolute inset-x-0 overflow-hidden -top-40 -z-10 transform-gpu blur-3xl sm:-top-80'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] \
           bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% \
              68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% \
              44.1%)'
          }}
        />
      </div>
      <div className='max-w-2xl py-32 mx-auto sm:py-48 lg:py-56'>
        <div className='text-center'>
          <h1 className='text-4xl font-bold tracking-tight text-white sm:text-6xl'>
            {props.title}
          </h1>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            {props.subtitle}
          </p>
          <div className='flex items-center justify-center mt-10 gap-x-6'>
            <Button
              asChild
              size='large'
              tone={props.primaryCTA.tone}
            >
              <Link href={props.primaryCTA.link}>
                {props.primaryCTA.text}
              </Link>
            </Button>
            <Button
              asChild
              size='large'
              variant='link'
              tone={props.secondaryCTA.tone}
            >
              <Link href={props.secondaryCTA.link}>
                {props.secondaryCTA.text}
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <div
        className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl \
         sm:top-[calc(100%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr \
           from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
          style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% \
               68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% \
               44.1%)'
          }}
        />
      </div>
    </div>
  )
}
