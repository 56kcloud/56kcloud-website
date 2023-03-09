import useTranslation from 'next-translate/useTranslation'
import Button from './button'

type ContactProps = {
  toggleContactModal: () => void
}

export default function Contact ({ toggleContactModal }: ContactProps) {
  const { t } = useTranslation('common')

  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='w-full'>
        <p className='text-center xl:text-lg text-blue-dark'>
          {t('contactText1')} <Button style='linkContact' onClick={toggleContactModal}>
            {t('contactText2')}</Button>{t('contactText3')}</p>
      </div>
    </section>
  )
}
