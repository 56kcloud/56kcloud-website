// import Image from 'next/image'
import Image from 'next/image'
import classNames from '../utils/classes'

export default function Card ({ number, image, icon, title, description, alignment = 'left', theme = 'dark' }) {
  return (
    <div className='w-full mx-auto mb-28 max-w-screen-2xl last:mb-0'>
      <div className={classNames(
        alignment === 'left' ? 'xl:mr-16' : 'xl:ml-16',
        theme === 'dark' ? 'bg-blue-medium text-white' : 'bg-white text-blue-dark',
        'relative flex flex-col md:flex-row')}>
        <div className='absolute right-10 top-10'>
          <span className='font-chap'>{number}</span>
        </div>
        <div className='w-2/3 px-24 -mb-12'>
          <div className='relative w-full -translate-y-12 h-96 md:h-full'>
            <Image src={image} alt='' fill className='object-contain'/>
          </div>
        </div>
        <div className='flex-col items-center w-full px-8 py-16 md:w-1/3'>
          <div className='w-12 h-auto'>
            <img src={icon} />
          </div>
          <h3 className={classNames(
            alignment === 'left' ? 'text-orange-medium' : 'text-blue-light',
            'mt-2 mb-1 font-chap text-[28px] font-medium')}>
            {title}
          </h3>
          <p className='font-light font-graphik'>{description}</p>
        </div>
      </div>
    </div>
  )
}
