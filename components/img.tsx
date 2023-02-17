import { ImgProps, ImgPropsImpl } from '../models/Img.model'
import Image from 'next/image'

export default function Img (props: ImgPropsImpl) {
  const imgProps = new ImgProps(props)

  return (
    <Image
      src={props.src}
      alt={props.alt}
      className='pointer-events-none'
      {...imgProps.specificHTMLProps}
    />
  )
}
