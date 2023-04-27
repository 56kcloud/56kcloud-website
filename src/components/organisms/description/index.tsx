import {Check} from '@/components/svgs/icons/check'
import Surtitle from '../../atoms/surtitle'

type DescriptionProps = {
  surtitle: string
  text: string
  details: Array<string>
}

export default function Description({surtitle, text, details}: DescriptionProps) {
  return (
    <section className='px-8 pb-[72px] pt-6 xl:section-padding'>
      <div className='relative max-w-6xl mx-auto'>
        <div className='w-full mb-16 xl:w-3/5'>
          <Surtitle text={surtitle}/>
          <p className='text-blue-dark text-[calc(20px+1vw)] title'>
            {text}
          </p>
        </div>
        <div className='w-full mb-16 lg:w-1/2'>
          <ul className='flex flex-col'>
            {details.map((detail, idx) => (
              <li
                key={idx}
                className='flex items-center gap-x-4 mb-7'>
                <div className='flex items-center justify-center w-8 h-8 p-2 bg-white rounded-full shadow-sm'>
                  <Check className='mt-0.5'/>
                </div>
                <span className='xl:text-lg'>
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
