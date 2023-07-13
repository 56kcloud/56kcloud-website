import {Image as ImageProps} from '@/models/image.model'
import Image from 'next/image'

export default function BackgroundImage({background}: {background: ImageProps}) {
  return (
    <Image
      src={background.src}
      placeholder='blur'
      blurDataURL='http://localhost:1337/uploads/thumbnail_training_546e045188.webp'
      alt={background.alt}
      width={background.width}
      height={background.height}
      className='background-image bg-primary-lighter'/>
  )
}
