import { CardPropsImpl } from '../../models/Card.model'
import classNames from '../../utils/classes'
import VerticalTitle from '../atoms/vertical-title'
import IllustrationCard from '../molecules/illustration-card'

type IllustrationCardsWrapperProps = {
  theme?: 'dark' | 'light'
  title: string
  cards: Array<CardPropsImpl>
}

export default function IllustrationCardWrapper ({ theme = 'dark', title, cards }
  : IllustrationCardsWrapperProps) {
  return (
    <section className={classNames(theme === 'dark' ? 'bg-blue-dark' : 'bg-blue-lighter', 'section-padding relative')}>
      <VerticalTitle title={title} styleCard='illustrationCard'
        classNameText={classNames(theme === 'dark' ? 'text-white' : 'text-blue-dark')} />
      {cards.map((card) => (
        <IllustrationCard
          key={card.title}
          number={card.number}
          image={card.image}
          icon={card.icon}
          title={card.title}
          description={card.description}
          alignment={card.alignment}
          theme={card.theme} />
      ))}
    </section>
  )
}
