import {ImageProps} from '@/models/image.model'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'

export type ContentAlternatePositionImageLeftProps = {
  title: string
  description: string
  image: ImageProps
}

export default function ContentAlternatePositionImageLeft(props: ContentAlternatePositionImageLeftProps) { 
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='relative px-6 mx-auto max-w-7xl lg:px-8'>
        {/* <dl className='grid grid-cols-1 gap-x-6 gap-y-14 lg:gap-y-36'> */}
        <div
          className='flex flex-col items-center lg:flex-row gap-y-10 lg:gap-x-16'>
          <div className='w-full lg:w-1/3 h-72'>
            <Image
              className='object-cover w-full h-full rounded-xl'
              src={props.image.url} 
              width={props.image.width}
              height={props.image.height}
              alt={props.image.alternateText || props.image.name}
            >
            </Image>
          </div>
          <div className='flex flex-col w-full lg:w-2/3 gap-y-2'>
            {/* Is 'dt' useful? */}
            <dt className='text-2xl font-medium text-white sm:text-3xl'>
              {props.title}
            </dt>
            {/* Is 'dd' useful? */}
            <dd className='text-[18px] leading-8 text-slate-400 font-light'>
              <p>{props.description}</p>
            </dd>
            <Button
              asChild
              size='medium'
              shape='circle'
              className='px-5 mt-4 text-md bg-sky-300 text-slate-900 hover:bg-violet-300'
            >
              <Link href=''>
                  Learn more
              </Link>
            </Button>
          </div>
        </div>
        {/* </dl> */}
      </div>
    </div>
  )
}
