import { useState } from 'react'
import TeamCard, { TeamCardProps } from '../molecules/team-card'
import useTranslation from 'next-translate/useTranslation'
import Button from '../atoms/button'
import Modal from '../molecules/modal'

type TeamCardsWrapperProps = {
  cards: Array<TeamCardProps>
}

export default function TeamCardsWrapper ({ cards }: TeamCardsWrapperProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('about')

  function openModal () {
    setIsOpen(true)
  }

  return (
    <section className='section-padding bg-blue-dark -mt-[1px]'>
      <div className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {cards.map((card) => (
          <TeamCard key={`${card.firstName} ${card.lastName}`} firstName={card.firstName} lastName={card.lastName}
            role={card.role} image={card.image} />
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-4xl leading-tight md:text-5xl title'>{t('teamTitle')}</h2>
          <p className='text-lg'>{t('teamText1')}
            <Button style='linkContact' setOpen={openModal}> {t('teamText2')}</Button>{t('teamText3')}
          </p>
        </div>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}
