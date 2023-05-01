import Image from 'next/image'
export type AvatarProps = {
  image: string
  alt: string
}
export default function Avatar({image, alt}: AvatarProps) {
  return (
    <div className='relative flex items-center w-8 h-8 gap-x-4'>
      <Image
        src={image}
        alt={alt}
        fill
        className='object-cover w-full h-full rounded-full'/>
    </div>
  )
}
