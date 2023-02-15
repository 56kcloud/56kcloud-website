import { companies } from '../data/companies'

export default function Companies () {
  return (
    <section className='section-padding bg-blue-lighter'>
      <h2 className='mb-14 text-center font-chap text-[calc(20px+0.75vw)] font-medium text-blue-dark'>These companies already trust us</h2>
      <div className='flex flex-wrap justify-center'>
        {companies.map((companie) => (
          <li className='m-6 list-none'>
            <div className='flex items-center justify-center w-20 h-20 bg-white rounded-full lg:h-28 lg:w-28'>
              <img src={companie.logo} alt={companie.name} className='w-8 lg:w-12'/>
            </div>
          </li>
        ))}
      </div>
    </section>
  )
}
