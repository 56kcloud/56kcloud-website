import {ImageProps} from '@/models/image.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import InfiniteSliderLogos from '@/components/ui/molecules/infinite-slider-logos'

export type LogoCloudsSimpleWithTitleProps = {
  surtitle: string
  title: string
  logos: Array<ImageProps>
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) {
  return (
    <ComponentLayout childrenClassName='px-0 sm:px-6'>
      <div className='pt-9 pb-0 lg:pt-[104px] lg:pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div
            className='relative w-full h-full p-8 pt-14 pb-32 bg-radial-gradient rounded-none sm:rounded-3xl \
            lg:rounded-[48px] lg:px-12 lg:pt-20'
          >
            <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent' />
            <div className='flex flex-col items-center space-y-4'>
              <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
                {props.surtitle}
              </span>
              <h2
                className='w-fit text-[44px] leading-[1.1875] font-extrabold text-center tracking-tight text-transparent \
              bg-clip-text bg-text-gradient-gray'
              >
                {props.title}
              </h2>
            </div>
            <InfiniteSliderLogos logos={props.logos} />
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
