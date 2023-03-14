import {Translate} from 'next-translate'
import {getTeamCardsAbout} from '../../data/about'
import Button from '../atoms/button'
import TeamCard, {TeamCardProps} from '../molecules/team-card'

type TeamCardsWrapperProps = {
  t: Translate
  toggleContactModal: () => void
}

export default function TeamCardsWrapper ({t, toggleContactModal}: TeamCardsWrapperProps) {
  const cards: Array<TeamCardProps> = getTeamCardsAbout(t)

  return (
    <section className='section-padding bg-blue-dark -mt-[1px]'>
      <div className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {cards.map((card) => (
          <TeamCard key={`${card.firstName} ${card.lastName}`} firstName={card.firstName} lastName={card.lastName}
            role={card.role} image={card.image} />
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-[36px] md:text-[48px] title'>{t('about:teamTitle')}</h2>
          <p className='text-lg'>{t('about:teamText1')}
            <Button onClick={toggleContactModal} style='linkContact'>{t('about:teamText2')}</Button>
            {t('about:teamText3')}
          </p>
        </div>
      </div>
    </section>
  )
}
