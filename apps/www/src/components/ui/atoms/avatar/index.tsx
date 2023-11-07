import {cn} from '@/utils/toolbox'
import Image from 'next/image'

export type AvatarProps = {
  image: string
  alt: string
  size?: 'sm' | 'lg' | 'xl'
}

export default function Avatar({image, alt, size='sm'}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }
  
  return (
    <div className={cn(sizes[size], 'flex items-center gap-x-4')}>
      <div className='relative w-full h-full overflow-hidden rounded-full bg-white/20'>
        {image && <Image
          src={image}
          alt={alt}
          fill
          className='object-cover w-full h-full'/>}
      </div>
    </div>
  )
}
