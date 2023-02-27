import { Detail } from '../../data/details'
import Surtitle from '../atoms/surtitle'
import Icon from '../atoms/icon'

type DescriptionProps = {
  surtitle: string
  text: string
  details: Array<Detail>
}

export default function Description ({ surtitle, text, details }: DescriptionProps) {
  return (
    <section className='px-8 pb-[72px] pt-6 xl:section-padding'>
      <div className='relative max-w-6xl mx-auto'>
        <div className='w-full mb-16 xl:w-3/5'>
          <Surtitle text={surtitle} />
          <p className='text-blue-dark text-[calc(20px+1vw)] title leading-tight'>{text}</p>
        </div>
        <div className='w-full mb-16 lg:w-1/2'>
          <ul className='flex flex-col'>
            {details.map((detail, idx) => (
              <li key={idx} className='flex items-center gap-x-4 mb-7'>
                <Icon src='/images/check.svg' alt='Check icon' width={0} height={0}
                  className='w-8 h-8 p-2 bg-white shadow-md' />
                <span className='xl:text-lg'>{detail.description}</span>
              </li>
            )) }
          </ul>
        </div>
      </div>
    </section>
  )
}
