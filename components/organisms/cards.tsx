import { cards } from '../../data/cards'
import Card from '../molecules/card'

export default function Cards () {
  return (
    <section className='bg-blue-dark section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-16 md:grid-cols-2'>
          {cards.map((card, idx) => (
            <Card key={idx} icon={card.icon} title={card.title} list={card.list} />
          ))}
        </div>
      </div>
    </section>
  )
}
