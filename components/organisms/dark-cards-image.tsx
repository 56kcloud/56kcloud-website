import { darkCardsImage } from '../../data/cards-image'
import CardImage from '../molecules/card-image'

export default function DarkCardsImage () {
  return (
    <section className='section-padding bg-blue-dark'>
      {darkCardsImage.map((cardImage) => (
        <CardImage
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
