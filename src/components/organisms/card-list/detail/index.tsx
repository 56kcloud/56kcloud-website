import DetailCard, {DetailCardProps} from '@/components/molecules/card/detail'
import VerticalTitle from '@/components/atoms/title/vertical'

export type DetailCardListProps = {
  title: string
  titleClassName?: string
  cards: Array<DetailCardProps>
}

export default function DetailCardList({title, titleClassName, cards}
  : DetailCardListProps) {
  return (
    <section className='relative bg-primary-900 section-padding'>
      <VerticalTitle
        title={title}
        styleCard='detailsCard'
        classNameText={titleClassName}/>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-16 md:grid-cols-2'>
          {cards.map((card) => (
            <DetailCard
              key={card.title}
              {...card}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
