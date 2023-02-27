import Link from 'next/link'
import { Card } from '../../data/team-cards'
import TeamCard from '../molecules/team-card'

type TeamCardsWrapperProps = {
  cards: Array<Card>
}

export default function TeamCardsWrapper ({ cards }: TeamCardsWrapperProps) {
  return (
    <section className='section-padding bg-blue-dark -mt-[1px]'>
      <div className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {cards.map((card) => (
          <TeamCard key={`${card.firstName} ${card.lastName}`} firstName={card.firstName} lastName={card.lastName}
            role={card.role} image={card.image} />
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-4xl leading-tight md:text-5xl title'>Part of the Team?</h2>
          <p className='text-lg'>Do you share the same vision and values? We'd love to hear from you.
            <Link href='#' className='font-normal text-orange-medium'> Contact us</Link>,
            we'd be happy to share a coffee/drink together.</p>
        </div>
      </div>
    </section>
  )
}
