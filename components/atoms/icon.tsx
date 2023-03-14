import Img from './img'
import classNames from '../../utils/classes'

export type IconProps = {
  iconLink?: string
  src: string
  alt: string
  width?: number
  height?: number
  fill?: boolean
  className?: string
}

export default function Icon ({src, alt, width, height, fill = false, className}: IconProps) {
  return (
    <div className={classNames('flex items-center justify-center rounded-full relative', className)}>
      <Img src={src} alt={alt} width={width} height={height} fill={fill} className='w-full h-auto' />
    </div>
  )
}
