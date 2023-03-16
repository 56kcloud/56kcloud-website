import Img from './img'

export type AvatarProps = {
  image: string
  alt: string
}

export default function Avatar({image, alt}: AvatarProps) {
  return (
    <div className='flex items-center gap-x-4'>
      <Img src={image} alt={alt} className='object-cover w-8 h-8 rounded-full' />
    </div>
  )
}
