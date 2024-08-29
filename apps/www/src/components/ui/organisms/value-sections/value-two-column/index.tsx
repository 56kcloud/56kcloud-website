import {Value} from '@/models/value.model'
import {cn, replaceBrTagWithNewline} from '@/utils/toolbox'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'

export type ValueTwoColumnProps = {
  title: string
  subtitle: string
  values: Value[]
}

export default function ValueTwoColumn(props: ValueTwoColumnProps) {
  return (
    <ComponentLayout gradientVariant='floatingGradient'>
      <div className='pb-20 pt-9 lg:pb-[104px] lg:pt-[120px]'>
        <div className='mx-auto text-center space-y-4 max-w-4xl'>
          <h2
            className='w-fit text-[44px] leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text \
              bg-text-gradient-gray lg:mx-auto'
          >
            {props.title}
          </h2>
          <p className='text-base leading-7 text-slate-400 font-light text-left lg:text-center'>{props.subtitle}</p>
        </div>
        <div className='grid grid-cols-1 mt-10 gap-8 sm:grid-cols-12 sm:grid-rows-2 sm:gap-8 w-full sm:mt-20'>
          {props.values.map((value, index) => (
            <div
              key={value.name}
              className={cn(
                'relative w-full col-span-1 sm:col-span-4',
                index === 3 ? 'col-span-1 sm:col-start-3' : '',
                index === 4 ? 'col-span-1 sm:col-start-7' : ''
              )}
            >
              <div className='absolute inset-0 flex flex-col items-center justify-center gap-y-2 px-4 z-10'>
                <h3 className='text-2xl leading-7 font-semibold text-center w-fit text-transparent bg-clip-text bg-text-gradient-blue'>
                  {value.name}
                </h3>
                <p className='text-center text-base leading-7 text-slate-50 font-light'>
                  {replaceBrTagWithNewline(value.description)}
                </p>
              </div>
              <div className='relative w-full'>
                <Image
                  className='w-full h-auto object-cover'
                  src={value.background.url}
                  width={value.background.width}
                  height={value.background.height}
                  alt={value.background.alternateText || value.background.name}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </ComponentLayout>
  )
}
