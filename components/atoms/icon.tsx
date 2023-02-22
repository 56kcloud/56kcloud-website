import classNames from '../../utils/classes'
import Img from './img'

export default function Icon ({ image, title, className = '' }) {
  return (
    <div className={classNames('flex items-center justify-center rounded-full', className)}>
      <Img src={image} alt={title} width={100} height={100} />
    </div>
  )
}
