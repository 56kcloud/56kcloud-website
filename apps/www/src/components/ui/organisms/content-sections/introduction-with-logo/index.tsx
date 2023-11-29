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
        <div className='flex gap-10 px-6 py-8 lg:px-12 rounded-xl bg-slate-800 lg:py-14'>
          <div className='w-3/4'>
            <div className='text-2xl font-medium text-white sm:text-3xl'>{props.title}</div>
            <div className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.description}</div>
          </div>
          <div className='flex items-center justify-center w-1/4'>
            <Image
              src={props.logo.url} 
              width={135}
              height={135}
              alt={props.logo.alternateText || props.logo.name}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default IntroductionWithLogo
