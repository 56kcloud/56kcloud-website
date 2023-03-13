import BaseCard, {BaseCardProps} from '../molecules/base-card'
import Surtitle from '../atoms/surtitle'

type BaseCardsWrapperProps = {
  cards: Array<BaseCardProps>
  text: string
  className?: string
}

export default function BaseCardsWrapper ({cards, text, className}: BaseCardsWrapperProps) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-10 md:mb-12 lg:mb-16 xl:px-36'>
          <Surtitle text={text} className={className} />
        </div>
        <div className='grid sm:grid-cols-2 xl:grid-cols-4'>
          {cards?.map((card) => (
            <BaseCard key={card.title} number={card.number} icon={card.icon} title={card.title}
              className={card.className} />
          ))}
        </div>
      </div>
    </section>
  )
}
