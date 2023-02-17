import { ImgPropsImpl } from '../models/Img.model'
import Image from 'next/image'

export default function Img (props: ImgPropsImpl) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      className='pointer-events-none'
      fill={props.fill}
      width={props.width}
      height={props.height}
    />
  )
}
