import {ImageProps} from '@/models/image.model'
import Image from 'next/image'
import TitleSection, {TitleSectionProps} from '@/components/ui/molecules/title-sections/normal'

type HeroWithImageTilesProps = {
  images: Array<ImageProps>
  title: TitleSectionProps
}

export default function HeroWithImageTiles({images, title}: HeroWithImageTilesProps) {
  return (
    <section className='px-8 py-24 2xl:px-36'>
      <div className='relative flex flex-col justify-between w-full'>
        <div className='flex justify-between mb-24 md:mb-14 lg:mb-0'>
          <div className='w-[49%]'>
            <div className='flex items-end justify-end pt-[20%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                {images[0] &&
                <Image
                  src={images[0].src}
                  alt={images[0].alt || ''}
                  width={images[0].width}
                  height={images[0].height}
                  className='object-cover w-full h-full'/>
                }
              </div>
            </div>
            <div className='flex items-end justify-end pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[406px] md:h-[480px] xl:h-[600px]'>
                {images[1] &&
                <Image
                  src={images[1].src}
                  alt={images[1].alt || ''}
                  width={images[1].width}
                  height={images[1].height}
                  className='object-cover w-full h-full'/>}
              </div>
            </div>
          </div>
          <div className='w-[49%]'>
            <div>
              <div className='relative w-full h-[300px] sm:h-[480px] md:h-[580px] xl:h-[700px]'>
                {images[2] &&
                <Image
                  src={images[2].src}
                  alt={images[2].alt || ''}
                  width={images[2].width}
                  height={images[2].height}
                  className='object-cover w-full h-full'/>}
              </div>
            </div>
            <div className='pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[500px] md:h-[730px] xl:h-[850px]'>
                {images[3] &&
                <Image
                  src={images[3].src}
                  alt={images[3].alt || ''}
                  width={images[3].width}
                  height={images[3].height}
                  className='object-cover w-full h-full'/>}
              </div>
            </div>
            <div className='hidden lg:flex items-start justify-end pt-[4%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                {images[4] &&
                <Image
                  src={images[4].src}
                  alt={images[4].alt || ''}
                  width={images[4].width}
                  height={images[4].height}
                  className='object-cover w-full h-full'/>}
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:bottom-52 xl:left-[10%]'>
          <div className='lg:w-[450px]'>
            <TitleSection {...title}/>
          </div>
        </div>
      </div>
    </section>
  )
}
