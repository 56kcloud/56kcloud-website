import { productCards } from '../data/product-cards'
import CardPage from './card-page'

export default function DarkProducts () {
  return (
    <section className='bg-blue-dark section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-2 gap-16'>
          {productCards.map((card, idx) => (
            <CardPage key={idx} icon={card.icon} title={card.title} list={card.list} />
          ))}
        </div>
      </div>
    </section>
  )
}
