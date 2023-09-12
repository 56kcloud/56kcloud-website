import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export default function BackgroundImage({background}: {background: ImageProps}) {
  return (
    <Image
      src={background.src}
      placeholder='blur'
      blurDataURL={background.blurDataURL}
      alt={background.alt || 'alt'}
      width={background.width}
      height={background.height}
      className='background-image bg-primary-lighter'/>
  )
}
