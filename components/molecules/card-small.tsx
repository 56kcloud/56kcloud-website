import Icon from '../atoms/icon'
import classNames from '../../utils/classes'

export default function CardSmall ({ number, icon, title, className }) {
  return (
    <div className='w-1/4 border-r last:border-r-0'>
      <div className='relative flex flex-col bg-white p-7 min-h-[25rem]'>
        <div className='absolute right-4 top-3 sm:right-10 sm:top-10'>
          <span className='title'>{number}</span>
        </div>
        <Icon src={icon} alt={title} className={classNames('w-12 h-12 p-3', className)} />
        <div className='mt-auto min-h-[7rem]'>
          <h3 className='text-2xl font-medium title'>{title}</h3>
        </div>
      </div>
    </div>
  )
}
