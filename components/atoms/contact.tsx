import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import Modal from '../molecules/modal'
import Button from './button'

export default function Contact () {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslation('common')

  function openModal () {
    setIsOpen(true)
  }

  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='w-full'>
        <p className='text-center xl:text-lg text-blue-dark'>
          {t('contactText1')} <Button style='linkContact' setOpen={openModal}>
            {t('contactText2')}</Button>{t('contactText3')}</p>
      </div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </section>
  )
}
