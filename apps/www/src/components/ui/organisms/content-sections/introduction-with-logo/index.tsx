import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type IntroductionWithLogoProps = {
  title: string
  description: string
  logo: ImageProps
}

const IntroductionWithLogo = (props: IntroductionWithLogoProps) => {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='flex flex-col gap-10 px-6 py-8 md:flex-row lg:px-12 rounded-xl bg-slate-800 lg:py-14'>
          <div className='order-2 w-full md:w-3/4 md:order-1'>
            <div className='text-2xl font-medium text-white sm:text-3xl'>{props.title}</div>
            <div className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.description}</div>
          </div>
          <div className='flex items-center justify-start order-1 w-full md:justify-center md:w-1/4 md:order-2'>
            <Image
              src={props.logo.url}
              width={props.logo.width}
              height={props.logo.height}
              alt={props.logo.alternateText || props.logo.name}
              className='w-24 h-auto md:w-32'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroductionWithLogo
