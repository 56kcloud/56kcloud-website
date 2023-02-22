import { lightCardsLarge } from '../../data/light-cards-large'
import CardLarge from '../molecules/card-large'

export default function LightCardsLarge () {
  return (
    <section className='section-padding bg-blue-lighter'>
      {lightCardsLarge.map((cardImage) => (
        <CardLarge
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
