import Img from './img'

type BackgroundImageProps = {
  src: string
  alt: string
  className?: string
}

export default function BackgroundImage ({src, alt, className}: BackgroundImageProps) {
  return (
    <div className={className}>
      <Img src={src} alt={alt} className='relative w-full h-auto' />
    </div>
  )
}
