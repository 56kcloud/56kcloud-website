import {CardWithIcon} from '@/models/card.model'
import {ImageProps} from '@/models/image.model'
import Icon from '@/components/ui/atoms/icon'
import Image from 'next/image'
import blurCyanImage from '@/../public/images/backgrounds/blur-cyan.png'

export type HeaderWithCardsProps = {
  title: string
  subtitle: string
  image: ImageProps
  cards: Array<CardWithIcon>
}

export default function HeaderWithCards(props: HeaderWithCardsProps) {
  return (
    <div className='relative py-24 overflow-hidden isolate sm:py-32'>
      <Image
        className='absolute -top-20 -left-40 lg:-left-28 opacity-50 w-[600px] h-[600px] lg:w-[800px] lg:h-[800px]'
        src={blurCyanImage}
        alt=''
        width={530}
        height={530}
        unoptimized
        priority
      />
      <div className='px-6 pt-20 mx-auto lg:pt-44 max-w-7xl'>
        <div className='flex flex-col justify-between lg:flex-row gap-x-16'>
          <div className='w-full lg:w-2/6'>
            <h2
              className='w-full md:w-3/4 lg:w-full text-4xl sm:text-[44px] sm:leading-[48px] xl:text-5xl \
              xl:leading-[52px] font-normal text-transparent bg-clip-text bg-gradient-to-l from-purple-300 \
              via-sky-300 to-purple-300 from-10% to-90%'
            >
              {props.title}
            </h2>
          </div>
          <div className='w-full mt-10 lg:mt-0 lg:pl-8 lg:border-l lg:w-4/6 lg:border-slate-800'>
            <p className='w-full md:w-3/4 lg:w-full text-[20px] leading-8 text-slate-400 font-light'>
              {props.subtitle}
            </p>
            <div className='flex flex-col mt-20 gap-y-6'>
              {props.cards.map((card) => (
                <div key={card.title}>
                  <div className='flex flex-row items-center gap-x-3'>
                    <Icon {...card.icon} className='flex-none text-sky-300 w-7 h-7' aria-hidden='true' />
                    <h3 className='font-medium text-[18px] leading-10 text-white'>{card.title}</h3>
                  </div>
                  <p className='text-base font-light leading-7 text-slate-400'>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
