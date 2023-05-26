import Button from '../button'
import useTranslation from 'next-translate/useTranslation'

type ContactProps = {
  toggleContactModal: () => void
}

export default function ContactSection({toggleContactModal}: ContactProps) {
  const {t} = useTranslation('common')

  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='w-full'>
        <p className='flex items-center justify-center xl:text-lg text-blue-dark'>
          <span>{t('contactText1')}</span>
          <Button
            tone='secondary'
            variant='link'
            className='inline-block py-0 pl-1 pr-0 text-lg hover:bg-transparent'
            onClick={toggleContactModal}>
            {t('contactText2')}
          </Button>
          <span>{t('contactText3')}</span>
        </p>
      </div>
    </section>
  )
}
