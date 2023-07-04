/* eslint-disable jsx-a11y/alt-text */
import Image, {StaticImageData} from 'next/image'
import Surtitle from '../../../atoms/surtitle'

export type LargeTitleSectionProps = {
  surtitle: string
  title: string
  text: string
  backgroundImage: {
    src: StaticImageData
    alt: string
    className?: string
  }
}

export default function LargeTitleSection({surtitle, title, text, backgroundImage}: LargeTitleSectionProps) {
  return (
    <section className='px-8 pb-12 xl:px-36'>
      <div className='max-w-6xl mx-auto mt-12 sm:mt-0'>
        <div className='flex items-center justify-center max-w-5xl mx-auto'>
          <Image
            {...backgroundImage}
          />
        </div>
        <div className='lg:-mt-12'>
          <Surtitle text={surtitle}/>
          <h2 className='mb-8 font-semibold title xl-responsive-title'>{title}</h2>
          <div className='w-full'>
            <p className='xl:text-lg'>{text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
