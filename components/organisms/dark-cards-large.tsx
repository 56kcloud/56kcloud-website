import { darkCardsLarge } from '../../data/dark-cards-large'
import CardLarge from '../molecules/card-large'

export default function DarkCardsLarge () {
  return (
    <section className='section-padding bg-blue-dark'>
      {darkCardsLarge.map((cardImage) => (
        <CardLarge
          key={cardImage.title}
          number={cardImage.number}
          image={cardImage.image}
          icon={cardImage.icon}
          title={cardImage.title}
          description={cardImage.description}
          alignment={cardImage.alignment} />
      ))}
    </section>
  )
}
