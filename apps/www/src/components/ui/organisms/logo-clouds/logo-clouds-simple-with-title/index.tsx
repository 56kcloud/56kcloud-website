import {Company} from '@/models/company.model'
import Image from 'next/image'

export type LogoCloudsSimpleWithTitleProps = {
  title: string
  companies: Array<Company>
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) { 
  return (
    <div className='py-24 bg-gray-900 sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <h2 className='text-lg font-semibold leading-8 text-center text-white'>
          {props.title}
        </h2>
        <div
          className='flex flex-col lg:flex-row flex-wrap justify-center items-center max-w-lg mx-auto mt-10 gap-x-8 \
                     sm:gap-x-10 lg:mx-0 lg:max-w-none text-white gap-y-10 sm:max-w-xl '
        >
          {props.companies.map((company, index) => (
            <Image
              key={index} 
              className='object-contain w-[200px] max-h-12'
              src={company.image.src}
              alt={company.name}
              width={company.image.width}
              height={company.image.height}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
