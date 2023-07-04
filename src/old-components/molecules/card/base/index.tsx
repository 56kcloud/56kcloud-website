import {cn} from '@/utils/toolbox'
import {padNumberWithZeroes} from '@/utils/toolbox'
import Image, {StaticImageData} from 'next/image'


export type BaseCardProps = {
  number: number
  icon: StaticImageData
  title: string
  className: string
}

export default function BaseCard({number, icon, title, className}: BaseCardProps) {
  return (
    <div className='z-10 border-b border-gray-100 border-solid sm:border-r last:border-r-0'>
      <div className='relative flex flex-col bg-white p-7 min-h-[15rem] sm:min-h-[25rem]'>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{padNumberWithZeroes(number, 2)}</span>
        </div>
        <div className={cn('w-12 h-12 p-3 rounded-full flex items-center justify-center', className)}>
          <Image
            src={icon}
            alt={title}
          />
        </div>
        <div className='mt-auto min-h-[7rem]'>
          <h3 className='text-[20px] md:text-[24px] font-medium title'>{title}</h3>
        </div>
      </div>
    </div>
  )
}
