import {CTAProps} from '@/models/cta.model'
import {Feature} from '@/models/feature.model'
import Badge from '@/components/ui/atoms/badge'
import Button from '@/components/ui/atoms/button'
import Icon from '@/components/ui/atoms/icon'
import Link from 'next/link'

export type FeatureThreeColumnWithIconsAndCTAsProps = {
  badge: string
  title: string
  subtitle: string
  features: Array<Feature<'icon'>>
  ctas: Array<CTAProps>
}

export default function FeatureThreeColumnWithIconsAndCTAs({
  badge,
  title,
  subtitle,
  features,
  ctas
}: FeatureThreeColumnWithIconsAndCTAsProps) {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='flex justify-center w-full'>
          <div className='max-w-2xl mr-auto lg:max-w-3xl lg:mx-0 text-center'>
            {badge && <Badge className='mb-5'>{badge}</Badge>}
            <h2
              className='w-fit mx-auto text-center text-3xl sm:text-4xl leading-[1.1875] font-extrabold tracking-tight text-transparent bg-clip-text
              bg-text-gradient-gray'
            >
              {title}
            </h2>
            <p className='mt-8 text-[20px] leading-8 text-slate-400 font-light'>{subtitle}</p>
          </div>
        </div>
        <div className='mt-11'>
          <div className='grid grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-3'>
            {features?.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col p-6 border border-slate-800 rounded-xl'
              >
                <div className='text-lg font-normal text-white'>
                  <div className='flex items-center justify-center w-8 h-8 mb-6 rounded-lg'>
                    <Icon
                      {...feature.icon}
                      className='w-auto h-8 fill-sky-300'
                    />
                  </div>
                  {feature.title}
                </div>
                <div className='flex flex-col flex-auto mt-1 text-base font-light leading-[26px] text-slate-400'>
                  <p className='flex-auto'>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='mt-24 mx-auto w-fit flex items-center gap-4'>
          {ctas.map((cta, index) => (
            <Button
              key={index}
              asChild
              size='large'
              tone={cta.tone}
            >
              <Link href={cta.link}>{cta.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
