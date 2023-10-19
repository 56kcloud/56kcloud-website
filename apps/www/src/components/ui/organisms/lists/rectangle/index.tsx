import RectangleCard, {RectangleCardProps} from '@/components/ui/molecules/cards/rectangle'
import Surtitle from '@/components/ui/atoms/surtitle'

export type RectangleCardListProps = {
  cards: Array<RectangleCardProps>
  surtitle: string
}

export default function RectangleCardList({cards, surtitle}: RectangleCardListProps) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 md:mb-12 lg:mb-16'>
          <Surtitle text={surtitle}/>
        </div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
          {cards?.map((card, index) => (
            <RectangleCard
              key={card.title}
              {...card}
              number={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
