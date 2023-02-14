import { lightCards } from '../data/light-cards'
import Card from './card'

export default function lightServices () {
  return (
    <section className='section-padding bg-blue-lighter'>
      {lightCards.map((card) => (
        <Card
          number={card.number}
          image={card.image}
          icon={card.icon}
          title={card.title}
          description={card.description}
          alignment={card.alignment}
          className='bg-white text-blue-dark'
        />
      ))}
    </section>
  )
}
