import {PlusBlue} from '@/components/svgs/icons/plus-blue'
import Image, {StaticImageData} from 'next/image'

export type TeamCardProps = {
  firstName: string
  lastName: string
  role: string
  image: StaticImageData
}

export default function TeamCard({firstName, lastName, role, image}: TeamCardProps) {
  return (
    <div className='relative flex flex-col p-6 mb-8 text-white sm:mb-0 bg-primary-500'>
      <p className='font-normal text-right'>{role}</p>
      <div className='w-2/3 mx-auto my-[10%]'>
        <Image
          src={image}
          alt={`${firstName} ${lastName}`}
          className='w-full rounded-full'/>
      </div>
      <h3 className='text-[24px] title'>{firstName} <br/> {lastName}</h3>
      <div className='absolute bottom-0 right-0 flex items-center justify-center w-16 h-16 pt-0.5 pl-1 bg-primary-200'>
        <PlusBlue/>
      </div>
    </div>
  )
}
