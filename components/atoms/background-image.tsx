import classNames from '../../utils/classes'
import Img from './img'

export default function BackgroundImage ({ src, alt, className = '' }) {
  return (
    <div className={classNames('w-full pointer-events-none', className)}>
      <Img src={src} alt={alt} width={1920} height={100} className='w-full' />
    </div>
  )
}
