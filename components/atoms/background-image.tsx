import Img from './img'

type BackgroundImageProps = {
  src: string
  alt: string
  width: number
  height: number
  fill?: boolean
  className?: string
}

export default function BackgroundImage ({src, alt, width, height, fill = false, className}: BackgroundImageProps) {
  return (
    <div className={className}>
      <Img src={src} alt={alt} width={width} height={height} fill={fill} className='w-full h-auto' />
    </div>
  )
}
