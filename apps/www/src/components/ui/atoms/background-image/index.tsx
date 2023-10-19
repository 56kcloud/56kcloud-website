import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export default function BackgroundImage({image}: {image: ImageProps}) {
  return (
    <Image
      src={image.src}
      placeholder='blur'
      blurDataURL={image.blurDataURL}
      alt={image.alt || 'alt'}
      width={image.width}
      height={image.height}
      className='background-image bg-primary-lighter'/>
  )
}
