import { cards } from '../data/cards'
import Card from './card'

export default function Services () {
  return (
    <div className='w-full py-24 px-36 bg-blue-dark [&>:nth-child(odd)]:text-red-600'>
      {cards.map((card) => (
        <Card image={card.image} icon={card.icon} title={card.title} description={card.description} alignment={card.alignment} />
      ))}
    </div>
  )
}
