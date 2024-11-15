import {ImageProps} from '@/models/image.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'
import IntroductionCardGradient from '@/components/ui/svgs/gradients/introduction-card-gradient'

export type IntroductionWithLogoProps = {
  surtitle: string
  title: string
  description: string
  logo: ImageProps
  gradient?: boolean
}

export default function IntroductionWithLogo(props: IntroductionWithLogoProps) {
  return (
    <ComponentLayout childrenClassName='px-0 sm:px-6'>
      <div className='py-20 lg:py-[104px]'>
        <div className='mx-auto max-w-6xl'>
          <div className='w-full relative overflow-hidden border-0 sm:border sm:border-slate-800 rounded-none sm:rounded-3xl lg:rounded-[48px]'>
            <div className='absolute w-full h-full -z-10'>
              <IntroductionCardGradient />
            </div>
            <div className='flex flex-col gap-x-20 gap-y-10 px-7 py-14 sm:px-8 lg:p-20 lg:flex-row'>
              <div className='w-full space-y-5 lg:w-3/4'>
                <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
                  {props.surtitle}
                </span>
                <h3 className='w-fit text-4xl leading-[42px] font-extrabold text-transparent tracking-tight bg-clip-text bg-text-gradient-gray'>
                  {props.title}
                </h3>
                <p className='text-base leading-[26px] text-slate-400 font-light'>{props.description}</p>
              </div>
              <div className='flex items-center justify-start w-full lg:w-1/4 lg:justify-center'>
                <Image
                  src={props.logo.url}
                  width={props.logo.width}
                  height={props.logo.height}
                  alt={props.logo.alternateText || props.logo.name}
                  className='w-36 h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
