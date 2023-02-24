import { Card } from '../../data/illustration-cards'
import classNames from '../../utils/classes'
import IllustrationCard from '../molecules/illustration-card'

type IllustrationCardsWrapperProps = {
  cards: Array<Card>
  theme?: 'dark' | 'light'
}

export default function IllustrationCardWrapper ({ cards, theme = 'dark' }: IllustrationCardsWrapperProps) {
  return (
    <section className={classNames(theme === 'dark' ? 'bg-blue-dark' : 'bg-blue-lighter', 'section-padding')}>
      {cards.map((card) => (
        <IllustrationCard
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
