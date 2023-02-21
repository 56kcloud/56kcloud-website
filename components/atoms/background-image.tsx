import classNames from '../../utils/classes'
import Img from './img'

export default function BackgroundImage ({ image, title, className = '' }) {
  return (
    <div className={classNames('w-full pointer-events-none', className)}>
      <Img src={image} alt={title} width={1920} height={100} className='w-full' />
    </div>
  )
}
