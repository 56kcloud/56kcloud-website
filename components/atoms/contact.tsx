import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

export default function Contact () {
  const { t } = useTranslation('common')

  return (
    <section className='px-8 py-24 sm:section-padding bg-blue-lighter'>
      <div className='w-full'>
        <p className='text-center xl:text-lg text-blue-dark'>
          {t('contactText1')} <Link href='#'
            className='font-normal text-orange-medium'> {t('contactText2')}</Link>{t('contactText3')}</p>
      </div>
    </section>
  )
}
