import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type ImageSimpleProps = {
  image: ImageProps
}

export default function ImageSimple(props: ImageSimpleProps) {  
  return (
    <div className='mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8'>
      <Image
        {...props.image}
        alt=''
        className='aspect-[9/4] w-full object-cover xl:rounded-3xl'
      />
    </div>
  )
}
