import classNames from '../utils/classes'

export default function BackgroundImage ({ image, title, className = '' }) {
  return (
    <div className={classNames('relative w-full pointer-events-none', className)}>
      <img src={image} alt={title} className='w-full' />
    </div>
  )
}
