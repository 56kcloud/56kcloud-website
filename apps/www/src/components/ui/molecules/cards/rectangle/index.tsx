import {ImageProps} from '@/models/image.model'
import {cn, padNumberWithZeroes} from '@/utils/toolbox'
import Image from 'next/image'

export type RectangleCardProps = {
  number: number
  image: ImageProps
  title: string
  className: string
}

export default function RectangleCard({number, image, title, className}: RectangleCardProps) {
  return (
    <div className='z-10 border-b border-gray-100 border-solid sm:border-r last:border-r-0'>
      <div className='relative flex flex-col bg-white p-7 min-h-[15rem] sm:min-h-[25rem]'>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{padNumberWithZeroes(number, 2)}</span>
        </div>
        <div className={cn('w-12 h-12 p-3 rounded-full flex items-center justify-center bg-primary-100', className)}>
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            placeholder='blur'
            blurDataURL={image.placeholder}
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
