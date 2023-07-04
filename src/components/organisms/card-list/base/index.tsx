import BaseCard, {BaseCardProps} from '../../../molecules/card/base'
import Surtitle from '@/components/atoms/surtitle'

export type BaseCardListProps = {
  cards: Array<BaseCardProps>
  text: string
  className?: string
}

export default function BaseCardList({cards, text, className}: BaseCardListProps) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 md:mb-12 lg:mb-16'>
          <Surtitle
            text={text}
            className={className}/>
        </div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
          {cards?.map((card) => (
            <BaseCard
              key={card.title}
              {...card}/>
          ))}
        </div>
      </div>
    </section>
  )
}
