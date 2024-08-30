import {ImageProps} from '@/models/image.model'
import {cn} from '@/utils/toolbox'
import Image from 'next/image'

export const avatarSizes = ['sm', 'md', 'lg', 'xl'] as const

export type AvatarProps = {
  size: (typeof avatarSizes)[number]
  image: ImageProps
}

export default function Avatar({size, image}: AvatarProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  }
  return (
    <div className={cn(sizes[size], 'flex items-center gap-x-4')}>
      <div className='relative w-full h-full overflow-hidden rounded-full'>
        {image && (
          <Image
            src={image.url}
            placeholder='blur'
            blurDataURL={image.placeholder}
            alt={image.alternateText || image.name}
            width={80}
            height={80}
            className='object-cover w-20 h-20 -translate-y-3'
          />
        )}
      </div>
    </div>
  )
}
