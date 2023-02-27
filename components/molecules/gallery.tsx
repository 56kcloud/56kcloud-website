import Img from '../atoms/img'
import Surtitle from '../atoms/surtitle'

export default function Gallery () {
  return (
    <section className='px-8 py-24 2xl:px-36'>
      <div className='relative flex flex-col justify-between w-full'>
        <div className='flex justify-between mb-24 md:mb-14 lg:mb-0'>
          <div className='w-[49%]'>
            <div className='flex items-end justify-end pt-[20%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                <Img src='/images/gallery-01.jpeg' alt='Building' fill className='object-cover' />
              </div>
            </div>
            <div className='flex items-end justify-end pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[406px] md:h-[480px] xl:h-[600px]'>
                <Img src='/images/gallery-02.jpeg' alt='Building' fill className='object-cover' />
              </div>
            </div>
          </div>
          <div className='w-[49%]'>
            <div>
              <div className='relative w-full h-[300px] sm:h-[480px] md:h-[580px] xl:h-[700px]'>
                <Img src='/images/gallery-03.jpeg' alt='Building' fill className='object-cover' />
              </div>
            </div>
            <div className='pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[500px] md:h-[730px] xl:h-[850px]'>
                <Img src='/images/gallery-04.jpeg' alt='Building' fill className='object-cover' />
              </div>
            </div>
            <div className='hidden lg:flex items-start justify-end pt-[4%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                <Img src='/images/gallery-05.jpeg' alt='Building' fill className='object-cover' />
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:bottom-52 xl:left-[10%]'>
          <div className='lg:w-[450px]'>
            <Surtitle text='Vision Statement' />
            <h3 className='text-2xl md:text-3xl lg:text-4xl xl:text-[42px] leading-[1.1] title'>We created a vision
              statement which is clear, short, and timeless. Every project gains the benefits of previous projects and
              experience. Innovation via Automation.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
