import { lightCards } from '../data/light-cards'
import CardHome from './card-home'

export default function lightServices () {
  return (
    <section className='section-padding bg-blue-lighter'>
      {lightCards.map((card) => (
        <CardHome
          key={card.title}
          number={card.number}
          image={card.image}
          icon={card.icon}
          title={card.title}
          description={card.description}
          alignment={card.alignment}
          theme='light' />
      ))}
    </section>
  )
}
