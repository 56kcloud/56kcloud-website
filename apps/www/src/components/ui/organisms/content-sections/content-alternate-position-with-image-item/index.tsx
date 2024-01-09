import {ContentAlternatePositionWithImage} from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item/content-alternate-position-with-image.model'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export default function ContentAlternatePositionWithImageItem(props: ContentAlternatePositionWithImage) {
  return (
    <div className='flex flex-col items-center lg:flex-row lg:gap-x-16 space-y-10 lg:space-y-0'>
      <div className={cn(props.imagePosition === 'left' ? '' : 'lg:order-last', 'w-full lg:w-1/3 h-72')}>
        <Image
          className='object-cover w-full h-full rounded-xl'
          src={props.image.url}
          width={props.image.width}
          height={props.image.height}
          alt={props.image.alternateText || props.image.name}
        ></Image>
      </div>
      <div className='flex flex-col w-full lg:w-2/3 gap-y-2'>
        <h2 className='text-2xl font-medium text-white sm:text-3xl'>{props.title}</h2>
        <p className='text-[18px] leading-8 text-slate-400 font-light'>{props.description}</p>
        <Button
          asChild
          size='medium'
          shape='circle'
          className='px-5 mt-4 text-md bg-sky-300 text-slate-900 hover:bg-violet-300'
        >
          <Link href={props.link}>Learn more</Link>
        </Button>
      </div>
    </div>
  )
}
