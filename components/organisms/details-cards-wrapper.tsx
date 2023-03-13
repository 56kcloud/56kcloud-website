import VerticalTitle from '../atoms/vertical-title'
import DetailsCard, { DetailsCardProps } from '../molecules/details-card'

type DetailsCardsWrapperProps = {
  title: string
  styleTitle?: string
  cards: Array<DetailsCardProps>
}

export default function DetailsCardsWrapper ({ title, cards, styleTitle }
  : DetailsCardsWrapperProps) {
  return (
    <section className='relative bg-blue-dark section-padding'>
      <VerticalTitle title={title} styleCard='detailsCard' classNameText={styleTitle} />
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-16 md:grid-cols-2'>
          {cards.map((card) => (
            <DetailsCard key={card.title} icon={card.icon} title={card.title} items={card.items} />
          ))}
        </div>
      </div>
    </section>
  )
}
