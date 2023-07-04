import Image from 'next/image'
import Surtitle from '@/components/atoms/surtitle'
import g1 from '../../../../public/images/gallery/1.webp'
import g2 from '../../../../public/images/gallery/2.webp'
import g3 from '../../../../public/images/gallery/3.webp'
import g4 from '../../../../public/images/gallery/4.webp'
import g5 from '../../../../public/images/gallery/5.webp'

export default function Gallery({t}) {

  return (
    <section className='px-8 py-24 2xl:px-36'>
      <div className='relative flex flex-col justify-between w-full'>
        <div className='flex justify-between mb-24 md:mb-14 lg:mb-0'>
          <div className='w-[49%]'>
            <div className='flex items-end justify-end pt-[20%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                <Image
                  src={g1}
                  alt={t('about:altImage1')}
                  className='object-cover w-full h-full'/>
              </div>
            </div>
            <div className='flex items-end justify-end pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[406px] md:h-[480px] xl:h-[600px]'>
                <Image
                  src={g2}
                  alt={t('about:altImage2')}
                  className='object-cover w-full h-full'/>
              </div>
            </div>
          </div>
          <div className='w-[49%]'>
            <div>
              <div className='relative w-full h-[300px] sm:h-[480px] md:h-[580px] xl:h-[700px]'>
                <Image
                  src={g3}
                  alt='Darragh'
                  className='object-cover w-full h-full'/>
              </div>
            </div>
            <div className='pt-[4%]'>
              <div className='relative w-full h-[300px] sm:h-[500px] md:h-[730px] xl:h-[850px]'>
                <Image
                  src={g4}
                  alt='Jean-Pierre'
                  className='object-cover w-full h-full'/>
              </div>
            </div>
            <div className='hidden lg:flex items-start justify-end pt-[4%]'>
              <div className='relative w-1/2 h-28 sm:h-44 md:h-60 xl:h-80'>
                <Image
                  src={g5}
                  alt={t('about:altImage5')}
                  className='object-cover w-full h-full'/>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute lg:bottom-52 xl:left-[10%]'>
          <div className='lg:w-[450px]'>
            <Surtitle text={t('about:epigraphSurtitle')}/>
            <h3 className='text-[24px] md:text-[30px] lg:text-[36px] xl:text-[42px] title'>{t('about:epigraphText')}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
