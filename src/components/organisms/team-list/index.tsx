import {Translate} from 'next-translate'
import {getTeamCardsAbout} from '../../../data/about'
import Button from '@/components/atoms/button'
import TeamCard, {TeamCardProps} from '@/components/molecules/card/team'

type TeamListProps = {
  t: Translate
  toggleContactModal: () => void
}

export default function TeamList({t, toggleContactModal}: TeamListProps) {
  const cards: Array<TeamCardProps> = getTeamCardsAbout(t)

  return (
    <section className='section-padding bg-primary-900 -mt-[1px]'>
      <div
        className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {cards.map((card) => (
          <TeamCard
            key={`${card.firstName} ${card.lastName}`}
            firstName={card.firstName}
            lastName={card.lastName}
            role={card.role}
            image={card.image}/>
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-[36px] md:text-[48px] title'>{t('about:teamTitle')}</h2>
          <p className='items-center justify-center text-lg'>
            <span>{t('about:teamText1')}</span>
            <Button
              tone='secondary'
              variant='link'
              className='inline-block py-0 pl-1 pr-0 text-lg hover:bg-transparent'
              onClick={toggleContactModal}>
              {t('about:teamText2')}
            </Button>
            <span>{t('about:teamText3')}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
