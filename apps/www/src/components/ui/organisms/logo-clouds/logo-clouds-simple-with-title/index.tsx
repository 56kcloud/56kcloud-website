import {ImageProps} from '@/models/image.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'
import InfiniteSliderLogos from '@/components/ui/molecules/infinite-slider-logos'
import Link from 'next/link'

export type LogoCloudVariant = 'slider' | 'grid'

export type LogoCloudsSimpleWithTitleProps = {
  surtitle?: string
  title: string
  link?: string[]
  logos: Array<ImageProps>
  variant?: LogoCloudVariant
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) {
  return (
    <ComponentLayout>
      <div className='pt-9 pb-0 lg:pt-[104px] lg:pb-6'>
        <div className='mx-auto max-w-7xl'>
          <div className='relative w-full h-full rounded-3xl px-6 py-12 pb-32 bg-radial-gradient sm:px-8 lg:rounded-[48px] lg:px-12 lg:pt-20'>
            <div className='absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-slate-900 to-transparent' />
            <div className='flex flex-col items-center space-y-4'>
              {props.surtitle && (
                <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
                  {props.surtitle}
                </span>
              )}
              <h2 className='w-fit text-[44px] leading-[1.1875] font-extrabold text-center tracking-tight text-transparent bg-clip-text bg-text-gradient-gray'>
                {props.title}
              </h2>
            </div>
            {props.variant === 'slider' ? (
              <InfiniteSliderLogos logos={props.logos} />
            ) : (
              <div className='w-fit mx-auto grid grid-cols-4 gap-y-8 mt-12'>
                {props.logos.map((logo, index) => (
                  <Link
                    href={`/partners/${props.link?.[index] || '#'}`}
                    key={index}
                    className='flex items-center justify-center mx-4 w-[234px] p-7 sm:p-8 lg:p-10 bg-[#151E31] rounded-2xl border border-slate-800 z-50 hover:bg-[#151E31]/50 hover:border-transparent transition-all duration-200'
                  >
                    <Image
                      className='max-h-6 sm:max-h-8 lg:max-h-10'
                      src={logo.url}
                      alt={logo.alternateText || logo.name}
                      width={logo.width}
                      height={logo.height}
                    />
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
