import Icon from '../atoms/icon'
import classNames from '../../utils/classes'

export type BaseCardProps = {
  number: string
  icon: string
  title: string
  className: string
}

export default function BaseCard ({number, icon, title, className}: BaseCardProps) {
  return (
    <div className='z-10 border-b border-gray-100 border-solid sm:border-r last:border-r-0'>
      <div className='relative flex flex-col bg-white p-7 min-h-[15rem] sm:min-h-[25rem]'>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{number}</span>
        </div>
        <Icon src={icon} alt={title} className={classNames('w-12 h-12 p-3', className)} />
        <div className='mt-auto min-h-[7rem]'>
          <h3 className='text-[20px] md:text-[24px] font-medium title'>{title}</h3>
        </div>
      </div>
    </div>
  )
}
