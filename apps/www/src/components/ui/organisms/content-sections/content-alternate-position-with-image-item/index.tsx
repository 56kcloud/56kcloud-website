import {ContentAlternatePositionWithImage} from '@/models/content-alternate-position-with-image'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type ContentAlternatePositionWithImageItemProps = {
  items: Array<ContentAlternatePositionWithImage>
}

export default function ContentAlternatePositionWithImageItem(props: ContentAlternatePositionWithImageItemProps) {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='relative px-6 mx-auto max-w-7xl lg:px-8'>
        {props.items?.map((item, index) => (
          <div
            key={index}
            className='flex flex-col items-center lg:flex-row gap-y-10 lg:gap-x-16'
          >
            <div className={cn(item.imagePosition === 'left' ? 'order-1' : 'order-2', 'w-full lg:w-1/3 h-72')}>
              <Image
                className='object-cover w-full h-full rounded-xl'
                src={item.image.url}
                width={item.image.width}
                height={item.image.height}
                alt={item.image.alternateText || item.image.name}
              ></Image>
            </div>
            <div className='flex flex-col w-full lg:w-2/3 gap-y-2'>
              <h2 className='text-2xl font-medium text-white sm:text-3xl'>{item.title}</h2>
              <p className='text-[18px] leading-8 text-slate-400 font-light'>{item.description}</p>
              <Button
                asChild
                size='medium'
                shape='circle'
                className='px-5 mt-4 text-md bg-sky-300 text-slate-900 hover:bg-violet-300'
              >
                <Link href={item.slug}>Learn more</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
