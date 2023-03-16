import classNames from '../../utils/classes'

export type ImgProps = {
  src: string
  alt: string
  className?: string
}

export default function Img ({src, alt, className}: ImgProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={classNames('pointer-events-none', className)} />
  )
}
