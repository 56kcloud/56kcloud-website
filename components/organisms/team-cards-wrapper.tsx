import TeamCard, { TeamCardProps } from '../molecules/team-card'
import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

type TeamCardsWrapperProps = {
  cards: Array<TeamCardProps>
}

export default function TeamCardsWrapper ({ cards }: TeamCardsWrapperProps) {
  const { t } = useTranslation('about')

  return (
    <section className='section-padding bg-blue-dark -mt-[1px]'>
      <div className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {cards.map((card) => (
          <TeamCard key={`${card.firstName} ${card.lastName}`} firstName={card.firstName} lastName={card.lastName}
            role={card.role} image={card.image} />
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-[36px] md:text-[48px] title'>{t('teamTitle')}</h2>
          <p className='text-lg'>{t('teamText1')}
            <Link href='#' className='font-normal text-orange-medium'> {t('teamText2')}</Link>{t('teamText3')}</p>
        </div>
      </div>
    </section>
  )
}
