import {
  IllustrationCardProps,
  IllustrationCardPropsImpl
} from '@/components/molecules/card/illustration/card.model'
import {cn} from '@/utils/classes'
import {padNumberWithZeroes} from '@/utils/toolbox'
import Image from 'next/image'


export default function IllustrationCard(props: IllustrationCardPropsImpl) {
  const cardProps = new IllustrationCardProps(props)
  const alignment = cardProps.alignment === 'left' ? 'xl:mr-16' : 'xl:ml-16'
  const backgroundColor = cardProps.theme === 'dark' ? 'bg-primary-500 text-white' : 'bg-white'

  return (
    <div className='w-full mx-auto mb-28 max-w-screen-2xl last:mb-0'>
      <div
        className={cn(alignment, backgroundColor,
          'relative flex flex-col md:flex-row')}>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{padNumberWithZeroes(cardProps.number, 2)}</span>
        </div>
        <div className='px-8 md:px-24 md:w-2/3'>
          <div className='relative -translate-y-6 h-60 md:-translate-y-16 lg:-translate-y-12 md:h-96'>
            <Image
              src={cardProps.image}
              alt={cardProps.title}
              className='object-contain h-full mx-auto'/>
          </div>
        </div>
        <div className='p-8 pt-0 md:p-16 md:w-1/3 md:pr-8 md:pl-0 lg:py-28 2xl:pr-36'>
          <div
            className={cn((cardProps.alignment === 'right'
              ? 'bg-primary-200'
              : 'bg-secondary-500'),
            'w-12 h-12 p-3 rounded-full flex items-center justify-center')}>
            <Image
              src={cardProps.icon}
              alt={cardProps.title}
            />
          </div>
          <h3
            className={cn(
              cardProps.alignment === 'left' ? 'text-secondary-500' : 'text-primary-200',
              'mt-4 mb-3 title text-[24px] md:text-[28px]')}>
            {cardProps.title}
          </h3>
          <p className='w-full sm:w-2/3 md:w-full'>{cardProps.description}</p>
        </div>
      </div>
    </div>
  )
}
