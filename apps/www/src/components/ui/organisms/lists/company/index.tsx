import {Company} from '@/models/company.model'
import Image from 'next/image'

export default function CompanyList({title, companies}: {title:string, companies: Array<Company>}) {

  return (
    <section className='bg-primary-50 section-padding' >
      <h2 className='text-center title mb-14 text-[36px] xl:text-[42px]'>{title}</h2>
      <ul className='flex flex-wrap justify-center'>
        {companies.map((company) => (
          <li
            key={company.name}
            className='flex items-center justify-center w-20 h-20 p-5 m-6 list-none bg-white rounded-full \
              lg:w-24 lg:h-24 relative group transition ease-in-out duration-500 hover:scale-110'>
            <Image
              width={company.logo.width}
              height={company.logo.height}
              src={company.logo.src}
              alt={company.name}
            />
            <a
              href={company.url}
              target='_blank'
              className='absolute items-center justify-center w-full h-full capitalize backdrop-blur-sm bg-white-50/50 \
                font-medium hidden group-hover:flex overflow-hidden rounded-full backdrop-brightness-105'>
              <p className='text-sm duration-300 animate-in group-hover:zoom-in group-out-of-range:zoom-out'>
                {company.name}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
