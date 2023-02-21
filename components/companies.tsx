import Img from './img'

import { companies } from '../data/companies'

export default function Companies () {
  return (
    <section className='bg-blue-lighter section-padding' >
      <h2 className='text-center title mb-14 xs-responsive-title'>These companies already trust us</h2>
      <div className='flex flex-wrap justify-center'>
        {companies.map((companie) => (
          <li key={companie.name} className='m-6 list-none'>
            <div className='flex items-center justify-center w-20 h-20 bg-white rounded-full lg:h-24 lg:w-24'>
              <div className='w-8 lg:w-12'>
                <Img src={companie.logo} alt={companie.name} width={100} height={100} />
              </div>
            </div>
          </li>
        ))}
      </div>
    </section>
  )
}
