import useTranslation from 'next-translate/useTranslation'
import Button from './button'

type ContactProps = {
  toggleIsModalOpen: () => void
}

export default function Contact ({ toggleIsModalOpen }: ContactProps) {
  const { t } = useTranslation('common')

  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='w-full'>
        <p className='text-center xl:text-lg text-blue-dark'>
          {t('contactText1')} <Button style='linkContact' setOpen={toggleIsModalOpen}>
            {t('contactText2')}</Button>{t('contactText3')}</p>
      </div>
    </section>
  )
}
