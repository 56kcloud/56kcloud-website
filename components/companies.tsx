import { companies } from '../data/companies'
import classNames from '../utils/classes'

export default function Companies () {
  return (
    <section className='section-padding bg-blue-lighter'>
      <h2 className='mb-14 text-center font-chap text-[calc(20px+0.75vw)] font-medium text-blue-dark'>
        These companies already trust us
      </h2>
      <div className='flex flex-wrap justify-center'>
        {companies.map((companie) => (
          <li className='m-6 list-none'>
            <div
              className={classNames(
                companie.position === 'high'
                  ? 'translate-y-[15%]'
                  : '-translate-y-[15%]',
                'flex h-20 w-20 translate-y-[15%] items-center justify-center rounded-full bg-white lg:h-28 lg:w-28'
              )}
            >
              <img
                src={companie.logo}
                alt={companie.name}
                className='w-8 lg:w-12'
              />
            </div>
          </li>
        ))}
      </div>
    </section>
  )
}
