import useTranslation from 'next-translate/useTranslation'
import { companies } from '../../data/companies'
import Icon from '../atoms/icon'

export default function Companies () {
  const { t } = useTranslation('companies')

  return (
    <section className='bg-blue-lighter section-padding' >
      <h2 className='text-center title mb-14 xs-responsive-title'>{t('title')}</h2>
      <div className='flex flex-wrap justify-center'>
        {companies.map((company) => (
          <li key={company.name} className='m-6 list-none'>
            <Icon src={company.logo} alt={company.logo} width={100} height={0}
              className='w-20 h-20 p-5 bg-white lg:w-24 lg:h-24' />
          </li>
        ))}
      </div>
    </section>
  )
}
