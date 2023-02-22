import { cardsSmallPartners } from '../../data/cards-small-partners'
import CardSmall from '../molecules/card-small'

export default function CardsSmall () {
  return (
    <div className='flex flex-wrap'>
      {cardsSmallPartners.map((card) => (
        <CardSmall number={card.number} icon={card.icon} title={card.title} className={card.className} />
      ))}
    </div>
  )
}
