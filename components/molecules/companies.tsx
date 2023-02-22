import { companies } from '../../data/companies'
import Icon from '../atoms/icon'

export default function Companies () {
  return (
    <section className='bg-blue-lighter section-padding' >
      <h2 className='text-center title mb-14 xs-responsive-title'>These companies already trust us</h2>
      <div className='flex flex-wrap justify-center'>
        {companies.map((companie) => (
          <li key={companie.name} className='m-6 list-none'>
            <Icon image={companie.logo} title={companie.logo} className='w-20 h-20 p-5 bg-white lg:w-24 lg:h-24' />
          </li>
        ))}
      </div>
    </section>
  )
}
