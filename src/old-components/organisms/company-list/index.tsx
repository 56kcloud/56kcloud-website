import {companies} from '../../../data/companies'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'

export default function CompanyList() {
  const {t} = useTranslation('home')

  return (
    <section className='bg-primary-50 section-padding' >
      <h2 className='text-center title mb-14 xs-responsive-title'>{t('companiesTitle')}</h2>
      <ul className='flex flex-wrap justify-center'>
        {companies.map((company) => (
          <li
            key={company.name}
            className='flex items-center justify-center w-20 h-20 p-5 m-6 list-none bg-white rounded-full \
             lg:w-24 lg:h-24'>
            <Image
              src={company.logo}
              alt={company.name}
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
