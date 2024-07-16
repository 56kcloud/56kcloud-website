import {replaceBrTagWithNewline} from '@/utils/toolbox'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import HeroGradient from '@/components/ui/svgs/gradients/hero-gradient'

export type HeroWithGradientProps = {
  surtitle: string
  title: string
  subtitle: string
}

export default function HeroWithGradient(props: HeroWithGradientProps) {
  const title = replaceBrTagWithNewline(props.title)
  const subtitle = replaceBrTagWithNewline(props.subtitle)

  return (
    <ComponentLayout>
      <div className='absolute -z-10 inset-x-0'>
        <HeroGradient />
      </div>
      <div className='pb-8 pt-40 lg:pb-20'>
        <div className='space-y-8'>
          <div className='flex justify-center w-full'>
            <span className='text-base font-semibold text-transparent bg-clip-text bg-text-gradient-blue'>
              {props.surtitle}
            </span>
          </div>
          <h2
            className='w-fit max-w-5xl mx-auto text-center text-5xl leading-[1.1875] font-extrabold tracking-tight text-transparent \
            bg-clip-text bg-text-gradient-gray lg:text-[58px] lg:leading-[1.125]'
          >
            {title}
          </h2>
        </div>
        <div className='max-w-3xl mx-auto text-lg font-light text-center mt-7 text-slate-400'>
          <p>{subtitle}</p>
        </div>
      </div>
    </ComponentLayout>
  )
}
