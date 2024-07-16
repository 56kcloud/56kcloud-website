import {ImageProps} from '../../../../../models/image.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import FloatingGradientLeft from '@/components/ui/svgs/gradients/floating-gradient/floating-gradient-left'
import Image from 'next/image'

export type CertificationsBadgesWithTitleProps = {
  title: string
  horizontalBadgesImage: ImageProps
  verticalBadgesImage: ImageProps
}

export default function CertificationsBadgesWithTitle(props: CertificationsBadgesWithTitleProps) {
  return (
    <ComponentLayout
      floatingGradients={[
        <FloatingGradientLeft
          key='1'
          className='absolute top-0 left-0'
        />
      ]}
    >
      <div className='py-20 lg:pb-[104px] lg:pt-[120px]'>
        <div className='mx-auto space-y-12 max-w-4xl'>
          <h2
            className='w-fit mx-auto text-[44px] leading-[48px] font-extrabold text-center tracking-tight \
            text-transparent bg-clip-text bg-text-gradient-gray lg:leading-[58px]'
          >
            {props.title}
          </h2>
          <Image
            className='object-cover hidden sm:block'
            src={props.horizontalBadgesImage.url}
            width={props.horizontalBadgesImage.width}
            height={props.horizontalBadgesImage.height}
            alt={props.horizontalBadgesImage.alternateText || props.horizontalBadgesImage.name}
          />
          <Image
            className='object-cover block sm:hidden'
            src={props.verticalBadgesImage.url}
            width={props.verticalBadgesImage.width}
            height={props.verticalBadgesImage.height}
            alt={props.verticalBadgesImage.alternateText || props.verticalBadgesImage.name}
          />
        </div>
      </div>
    </ComponentLayout>
  )
}
