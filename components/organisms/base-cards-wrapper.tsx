import { Card } from '../../data/base-cards'
import BaseCard from '../molecules/base-card'

type BaseCardsWrapperProps = {
  cards: Array<Card>
}

export default function BaseCardsWrapper ({ cards }: BaseCardsWrapperProps) {
  return (
    <div className='flex flex-wrap'>
      {cards?.map((card) => (
        <BaseCard key={card.title} number={card.number} icon={card.icon} title={card.title}
          className={card.className} />
      ))}
    </div>
  )
}
