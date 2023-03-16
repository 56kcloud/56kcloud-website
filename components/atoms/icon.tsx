import Img from './img'
import classNames from '../../utils/classes'

export type IconProps = {
  iconLink?: string
  src: string
  alt: string
  className?: string
}

export default function Icon ({src, alt, className}: IconProps) {
  return (
    <div className={classNames('flex items-center justify-center rounded-full relative', className)}>
      <Img src={src} alt={alt} className='w-full h-auto' />
    </div>
  )
}
