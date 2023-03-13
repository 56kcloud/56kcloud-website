import {ImgProps, ImgPropsImpl} from '../../models/img.model'
import Image from 'next/image'
import classNames from '../../utils/classes'

export default function Img (props: ImgPropsImpl) {
  const imgProps = new ImgProps(props)

  return (
    <Image src={props.src} alt={props.alt} className={classNames(imgProps.className || '', 'pointer-events-none')}
      {...imgProps.specificHTMLProps}
    />
  )
}
