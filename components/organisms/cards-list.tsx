import { cardsList } from '../../data/cards-list'
import CardList from '../molecules/card-list'

export default function CardsList () {
  return (
    <section className='bg-blue-dark section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid gap-16 md:grid-cols-2'>
          {cardsList.map((cardList, idx) => (
            <CardList key={idx} {...cardList} />
          ))}
        </div>
      </div>
    </section>
  )
}
