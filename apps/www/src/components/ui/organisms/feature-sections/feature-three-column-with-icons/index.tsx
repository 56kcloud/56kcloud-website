import {Feature} from '@/models/feature.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Icon from '@/components/ui/atoms/icon'

export type FeatureThreeColumnWithIconsProps = {
  title: string
  subtitle?: string
  features: Array<Feature<'icon'>>
}

export default function FeatureThreeColumnWithIcons(props: FeatureThreeColumnWithIconsProps) {
  return (
    <ComponentLayout gradientVariant='floatingGradient'>
      <div className='pb-20 pt-9 lg:pb-[104px] lg:pt-[120px] space-y-10 lg:space-y-20'>
        <div className='mx-auto text-center space-y-4 max-w-4xl'>
          <h2 className='w-fit mx-auto text-[44px] leading-[48px] font-extrabold tracking-tight text-transparent bg-clip-text bg-text-gradient-gray lg:leading-[58px]'>
            {props.title}
          </h2>
          <p className='text-base leading-7 text-slate-400 font-light'>{props.subtitle}</p>
        </div>
        <div className='mt-11'>
          <div className='grid grid-cols-1 gap-12 lg:gap-6 lg:grid-cols-3'>
            {props.features?.map((feature, index) => (
              <div
                key={index}
                className='flex flex-col lg:p-6 space-y-3'
              >
                <div className='flex items-center gap-x-3'>
                  <div className='flex items-start h-full translate-y-[2px]'>
                    <Icon
                      {...feature.icon}
                      className='w-6 h-6 text-sky-500'
                    />
                  </div>
                  <h3 className='text-xl w-fit font-semibold tracking-tight text-transparent bg-clip-text bg-text-gradient-gray'>
                    {feature.title}
                  </h3>
                </div>
                <p className='text-base leading-7 font-light text-slate-400'>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ComponentLayout>
  )
}
