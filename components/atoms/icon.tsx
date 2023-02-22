import classNames from '../../utils/classes'
import Img from './img'

export default function Icon ({ src, alt, className = '' }) {
  return (
    <div className={classNames('flex items-center justify-center rounded-full', className)}>
      <Img src={src} alt={alt} width={100} height={100} />
    </div>
  )
}
