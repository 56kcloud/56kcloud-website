import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type DiagramFullWidthProps = {
  title: string
  description: string
  image: ImageProps
}

export default function DiagramFullWidth(props: DiagramFullWidthProps) {
  return (
    <div className='relative isolate py-20 lg:py-[104px]'>
      <div className='relative mx-auto max-w-7xl'>
        <div className='flex items-center justify-center p-20 bg-black border rounded-xl border-slate-800'>
          <Image
            src={props.image.url}
            placeholder='blur'
            blurDataURL={props.image.placeholder}
            width={props.image.width}
            height={props.image.height}
            className='object-cover h-full'
            alt={props.image.alternateText || props.image.name}
          />
        </div>
      </div>
    </div>
  )
}
