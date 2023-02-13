import { lightCards } from '../data/light-cards'
import Card from './card'

export default function lightServices () {
  return (
    <div className='w-full pb-24 px-36 bg-blue-lighter'>
      {lightCards.map((card) => (
        <Card image={card.image} icon={card.icon} title={card.title} description={card.description} alignment={card.alignment} className='bg-white' />
      ))}
    </div>
  )
}
