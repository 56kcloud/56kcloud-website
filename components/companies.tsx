import { companies } from '../data/companies'
import classNames from '../utils/classes'

export default function Companies () {
  return (
    <section className='py-24 px-36 bg-blue-lighter'>
      <h2 className='text-center font-chap text-blue-dark font-medium text-[calc(20px+0.75vw)] mb-14'>These companies already trust us</h2>
      <div className='flex flex-wrap justify-center gap-x-10'>
        {companies.map((companie) => (
          <div key={companie.name} className={(classNames(
            companie.position === 'low' ? 'translate-y-4' : '-translate-y-4',
            'flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-[0_30px_80px_0_rgba(201,218,218,0.25)]'))}>
            <img src={companie.logo} alt={companie.name} className='w-12' />
          </div>
        ))}
      </div>
    </section>
  )
}
