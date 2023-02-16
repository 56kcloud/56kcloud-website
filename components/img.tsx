import { ImgProps, ImgPropsImpl } from '../models/Img.model'
import Image from 'next/image'

export default function Img (props: ImgPropsImpl) {
  const imgProps = new ImgProps(props)

  return (
    <Image
      src={imgProps.src}
      alt={imgProps.alt}
      width={imgProps.width}
      height={imgProps.height}
      className='pointer-events-none'
    />
  )
}
