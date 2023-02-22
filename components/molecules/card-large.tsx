import { CardProps, CardPropsImpl } from '../../models/Card.model'
import classNames from '../../utils/classes'
import Img from '../atoms/img'
import Icon from '../atoms/icon'

<<<<<<<< HEAD:components/molecules/illustration-card.tsx
export default function IllustrationCard (props: CardPropsImpl) {
========
export default function CardLarge (props: CardPropsImpl) {
>>>>>>>> 98c2327 ([app] Create small cards wrapper):components/molecules/card-large.tsx
  const cardProps = new CardProps(props)
  const alignment = cardProps.alignment === 'left' ? 'xl:mr-16' : 'xl:ml-16'
  const backgroundColor = cardProps.theme === 'dark' ? 'bg-blue-medium text-white' : 'bg-white'

  return (
    <div className='w-full mx-auto mb-28 max-w-screen-2xl last:mb-0'>
      <div className={classNames(alignment, backgroundColor,
        'relative flex flex-col md:flex-row')}>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{cardProps.number}</span>
        </div>
        <div className='px-8 md:px-24 md:w-2/3'>
          <div className='relative -translate-y-6 h-60 md:-translate-y-16 lg:-translate-y-12 md:h-96'>
            <Img src={cardProps.image} alt={cardProps.title} fill className='object-contain'/>
          </div>
        </div>
        <div className='p-8 pt-0 md:p-16 md:w-1/3 md:pr-8 md:pl-0 lg:py-28 2xl:pr-36'>
          <Icon src={cardProps.icon} alt={cardProps.title} width={0} height={0}
            className={classNames(cardProps.alignment === 'right'
              ? 'bg-blue-light'
              : 'bg-orange-medium', 'w-12 h-12 p-3')} />
          <h3 className={classNames(
            cardProps.alignment === 'left' ? 'text-orange-medium' : 'text-blue-light',
            'mt-4 mb-3 title text-[28px] leading-none')}>
            {cardProps.title}
          </h3>
          <p className='w-full sm:w-2/3 md:w-full'>{cardProps.description}</p>
        </div>
      </div>
    </div>
  )
}
