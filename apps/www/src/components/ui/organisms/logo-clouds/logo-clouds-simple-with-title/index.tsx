import {ImageProps} from '@/models/image.model'
import Image from 'next/image'

export type LogoCloudsSimpleWithTitleProps = {
  title: string
  images: Array<ImageProps>
}

export default function LogoCloudsSimpleWithTitle(props: LogoCloudsSimpleWithTitleProps) {
  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <h2 className='text-lg font-semibold leading-8 text-center text-white'>{props.title}</h2>
        <div className='grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-4 mt-7 gap-x-6 sm:gap-y-6'>
          {props.images.map((image, index) => (
            <div
              key={index}
              className='flex items-center justify-center w-full p-7 sm:p-8 lg:p-11 sm:h-28 lg:h-36 bg-slate-800 \
              rounded-xl'
            >
              <Image
                className='max-h-6 sm:max-h-8 lg:max-h-11'
                src={image.url}
                alt={image.alternateText || image.name}
                width={image.width}
                height={image.height}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
