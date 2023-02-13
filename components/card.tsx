import Image from 'next/image'
import classNames from '../utils/classes'

export default function Card ({ image, icon, title, description, alignment }) {
  return (
    <div className='w-full mx-auto mb-28 max-w-7xl last:mb-0'>
      <div className={classNames(
        alignment === 'left' ? '-ml-16' : 'ml-16',
        'flex w-full bg-blue-medium px-28 py-28')}>
        <div className='w-9/12'>
          <div className='w-3/5 -mt-[25%]'>
            <img src={image} alt={`${title} icon`} />
          </div>
        </div>
        <div className='w-3/12 text-white'>
          <div className='w-12 h-auto'>
            <Image src={icon} width='100%' height='100%' objectFit='contain' />
          </div>
          <h3 className={classNames(
            alignment === 'left' ? 'text-orange-medium' : 'text-blue-light',
            'text-[28px] mt-2 mb-1 font-chap font-medium')}>{title}</h3>
          <p className='text-base font-light font-graphik'>{description}</p>
        </div>
      </div>
    </div>
  )
}
