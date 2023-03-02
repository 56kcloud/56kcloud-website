import DetailsCard from '../molecules/details-card'

type DetailsCardsWrapperProps = {
  cards: Array<{ icon: string; title: string; items: Array<string> }>
}

export default function DetailsCardsWrapper ({ cards }: DetailsCardsWrapperProps) {
  return (
    <section className='bg-blue-dark section-padding'>
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
