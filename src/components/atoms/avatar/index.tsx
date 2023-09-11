import {cn} from '@/utils/toolbox'
import Image from 'next/image'
export type AvatarProps = {
  image: string
  alt: string
  size?: 'sm' | 'lg'
}
export default function Avatar({image, alt, size='sm'}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    lg: 'w-32 h-32'
  }
  
  return (
    <div className={cn(sizes[size], 'relative flex items-center gap-x-4')}>
      <Image
        src={image}
        alt={alt}
        fill
        className='object-cover w-full h-full rounded-full'/>
    </div>
  )
}
