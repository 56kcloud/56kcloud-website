import { darkCards } from '../data/dark-cards'
import CardHome from './card-home'

export default function DarkServices () {
  return (
    <section className='section-padding bg-blue-dark'>
      {darkCards.map((card) => (
        <CardHome
          key={card.title}
          number={card.number}
          image={card.image}
          icon={card.icon}
          title={card.title}
          description={card.description}
          alignment={card.alignment} />
      ))}
    </section>
  )
}
