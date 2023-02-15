import classNames from '../utils/classes'
import Image from 'next/image'

export default function Card ({ number, image, icon, title, description, alignment = 'left', theme = 'dark' }) {
  return (
    <div className='w-full mx-auto mb-28 max-w-screen-2xl last:mb-0'>
      <div className={classNames(
        alignment === 'left' ? 'xl:mr-16' : 'xl:ml-16',
        theme === 'dark' ? 'bg-blue-medium text-white' : 'bg-white text-blue-dark',
        'relative font-graphik font-light flex flex-col md:flex-row')}>
        <div className='absolute right-10 top-10'>
          <span className='font-medium font-chap'>{number}</span>
        </div>
        <div className='px-8 md:px-24 md:w-2/3'>
          <div className='relative -translate-y-6 h-60 md:-translate-y-16 lg:-translate-y-12 md:h-96'>
            <Image src={image} alt={title} fill className='object-contain'/>
          </div>
        </div>
        <div className='p-8 pt-0 md:p-16 md:w-1/3 md:pr-8 md:pl-0 lg:py-28 2xl:pr-36'>
          <div className='w-12 h-auto'>
            <img src={icon} />
          </div>
          <h3 className={classNames(
            alignment === 'left' ? 'text-orange-medium' : 'text-blue-light',
            'mt-2 mb-1 font-chap text-[28px] font-medium')}>
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
