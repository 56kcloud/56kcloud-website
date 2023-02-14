import classNames from '../utils/classes'

export default function Card ({
  number,
  image,
  icon,
  title,
  description,
  alignment = 'left',
  theme = 'dark'
}) {
  return (
    <div className='w-full mx-auto mb-28 max-w-7xl last:mb-0'>
      <div
        className={classNames(
          alignment === 'left' ? 'xl:-ml-16' : 'xl:ml-16',
          theme === 'dark' ? 'bg-blue-medium text-white' : 'bg-white text-blue-dark',
          'relative flex w-full flex-col p-8 md:flex-row md:px-16 md:py-28 xl:px-28'
        )}
      >
        <div className='absolute right-10 top-10'>
          <span
            className={classNames('font-chap text-base')}
          >
            {number}
          </span>
        </div>
        <div className='flex justify-center w-full md:block md:w-9/12'>
          <div className='-mt-[10%] w-3/5 md:-mt-[25%]'>
            <img src={image} alt={title} />
          </div>
        </div>
        <div className='w-5/12 md:w-3/12 '>
          <div className='w-12 h-auto'>
            <img src={icon} />
          </div>
          <h3
            className={classNames(
              alignment === 'left' ? 'text-orange-medium' : 'text-blue-light',
              'mt-2 mb-1 font-chap text-[28px] font-medium'
            )}
          >
            {title}
          </h3>
          <p
            className={classNames(
              'font-graphik text-base font-light'
            )}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
