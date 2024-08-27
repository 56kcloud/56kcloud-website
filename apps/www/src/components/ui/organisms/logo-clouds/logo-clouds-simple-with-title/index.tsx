import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'

export type LogoCloudsSimpleWithTitleProps = {
  surtitle: string
  title: string
  images: Array<ImageProps>
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) {
  return (
    <ComponentLayout>
      <div className='pt-9 pb-0 lg:pt-[104px] lg:pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative w-full h-full rounded-3xl p-8 pb-32 bg-radial-gradient lg:rounded-[48px] lg:px-12 lg:pt-20'>
            <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent' />
            <div className='flex flex-col items-center space-y-4'>
              <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
                {props.surtitle}
              </span>
              <h2
                className='w-fit text-[44px] leading-[48px] font-extrabold text-center tracking-tight text-transparent \
              bg-clip-text bg-text-gradient-gray lg:leading-[58px]'
              >
                {props.title}
              </h2>
            </div>
            <div className='grid grid-cols-1 gap-x-6 gap-y-3 mt-8  mx-auto max-w-5xl lg:grid-cols-4 lg:mt-12'>
              {props.images.map((image, index) => (
                <div
                  key={index}
                  className='flex items-center justify-center w-full p-7 sm:p-8 lg:p-10 sm:h-28 lg:h-32 bg-[#151E31] \
                rounded-2xl border border-slate-800'
                >
                  <Image
                    className={cn(index === 0 ? 'max-h-5 sm:max-h-7 lg:max-h-6' : 'max-h-6 sm:max-h-8 lg:max-h-10')}
                    src={image.url}
                    alt={image.alternateText || image.name}
                    width={image.width}
                    height={image.height}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
