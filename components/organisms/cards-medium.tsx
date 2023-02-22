import { cardsMedium } from '../../data/cards-medium'
import CardMedium from '../molecules/card-medium'

export default function CardsMedium () {
  return (
    <section className='bg-blue-dark section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-16 md:grid-cols-2'>
          {cardsMedium.map((card, idx) => (
            <CardMedium key={idx} icon={card.icon} title={card.title} list={card.list} />
          ))}
        </div>
      </div>
    </section>
  )
}
