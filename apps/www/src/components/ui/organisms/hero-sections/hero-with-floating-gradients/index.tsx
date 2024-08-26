import {ArrowRightIcon} from '@heroicons/react/24/outline'
import {CTAProps} from '@/models/cta.model'
import {ImageProps} from '@/models/image.model'
import {replaceBrTagWithNewline} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import FloatingGradientLeft from '@/components/ui/svgs/gradients/floating-gradient/floating-gradient-left'
import FloatingGradientRight from '@/components/ui/svgs/gradients/floating-gradient/floating-gradient-right'
import Link from 'next/link'

export type HeroWithFloatingGradientsProps = {
  title: string
  subtitle: string
  image: ImageProps
  cta: CTAProps
}

export default function HeroWithFloatingGradients(props: HeroWithFloatingGradientsProps) {
  const title = replaceBrTagWithNewline(props.title)
  const subtitle = replaceBrTagWithNewline(props.subtitle)

  return (
    <ComponentLayout
      className='overflow-hidden'
      floatingGradients={[
        <FloatingGradientLeft
          key='1'
          className='absolute -top-20 -left-40'
        />,
        <FloatingGradientRight
          key='2'
          className='absolute -right-96 hidden lg:block'
        />
      ]}
    >
      <div className='pb-8 pt-36 lg:pt-64 lg:pb-20'>
        <h1
          className='w-fit mx-auto text-center text-5xl leading-[1.1875] font-extrabold tracking-tight text-transparent \
          bg-clip-text bg-text-gradient-gray lg:text-7xl lg:leading-[1.125]'
        >
          {title}
        </h1>
        <div className='text-lg font-light text-center mt-7 text-slate-400'>
          <p>{subtitle}</p>
        </div>
        <div className='flex items-center justify-center mt-10'>
          <Button
            asChild
            size='large'
            tone={props.cta.tone}
            shape='circle'
            className='text-slate-950 bg-gradient-to-tl from-slate-50/85 via-slate-50 to-slate-50/85 \
                from-10% to-90% px-6 z-50 hover:bg-current hover:text-current'
            trailing={
              <ArrowRightIcon
                className='w-4 h-4 text-sky-500'
                strokeWidth={2}
              />
            }
          >
            <Link
              href={props.cta.link}
              target='_blank'
            >
              {props.cta.title}
            </Link>
          </Button>
        </div>
      </div>
    </ComponentLayout>
  )
}
