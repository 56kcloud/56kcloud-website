import { darkCards } from '../data/dark-cards'
import Card from './card'

export default function DarkServices () {
  return (
    <div className='w-full py-24 px-36 bg-blue-dark'>
      {darkCards.map((card) => (
        <Card image={card.image} icon={card.icon} title={card.title} description={card.description} alignment={card.alignment} />
      ))}
    </div>
  )
}
