import { lightCardsImage } from '../data/light-cards-image'
import CardImage from './card-image'

export default function lightServices () {
  return (
    <section className='section-padding bg-blue-lighter'>
      {lightCardsImage.map((cardImage) => (
        <CardImage
          key={cardImage.title}
          number={cardImage.number}
          image={cardImage.image}
          icon={cardImage.icon}
          title={cardImage.title}
          description={cardImage.description}
          alignment={cardImage.alignment}
          theme='light' />
      ))}
    </section>
  )
}
