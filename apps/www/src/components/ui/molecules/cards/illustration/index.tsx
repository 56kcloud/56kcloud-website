import {IllustrationCardPropsImpl} from './illustration-card.model'
import {cn} from '@/utils/toolbox'
import {padNumberWithZeroes} from '@/utils/toolbox'
import Image from 'next/image'
import Link from 'next/link'


export default function IllustrationCard({
  theme = 'dark',
  illustration,
  href,
  number,
  title,
  description
}: IllustrationCardPropsImpl) {
  const alignment = number % 2 === 0 ? 'right' : 'left'
  const alignClasses = alignment === 'left' ? 'xl:mr-16' : 'xl:ml-16'
  const backgroundColor = theme === 'dark' ? 'bg-primary-500 text-white' : 'bg-white'

  return (
    <div className='w-full mx-auto mb-28 max-w-screen-2xl last:mb-0'>
      <Link
        href={href}
        className={cn(alignClasses, backgroundColor,
          'relative flex flex-col md:flex-row duration-200 hover:scale-105')}>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{padNumberWithZeroes(number, 2)}</span>
        </div>
        <div className='px-8 md:px-24 md:w-2/3'>
          <div className='relative -translate-y-6 h-60 md:-translate-y-16 lg:-translate-y-12 md:h-96'>
            <Image
              src={illustration.src}
              width={illustration.width}
              height={illustration.height}
              placeholder='blur'
              blurDataURL={illustration.blurDataURL}
              alt={title}
              className='object-contain h-full mx-auto'/>
          </div>
        </div>
        <div className='p-8 pt-0 md:p-16 md:w-1/3 md:pr-8 md:pl-0 lg:py-28 2xl:pr-36'>
          <h3
            className={cn(
              alignment === 'left' ? 'text-secondary-500' : 'text-primary-200',
              'mt-4 mb-3 title text-[24px] md:text-[28px]')}>
            {title}
          </h3>
          <p className='w-full sm:w-2/3 md:w-full'>{description}</p>
        </div>
      </Link>
    </div>
  )
}
