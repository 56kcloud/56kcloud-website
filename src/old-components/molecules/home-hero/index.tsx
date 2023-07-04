import Image from 'next/image'
import Train from '../../../../public/images/backgrounds/train.webp'

export default function Hero({t}) {
  return (
    <div className='relative pt-24 overflow-hidden bg-white sm:pt-0'>
      <Image
        alt={'Train background'}
        src={Train}
        className='w-full'/>
      <div
        className='title font-semibold absolute left-[41%] bottom-[40%] z-10 sm:bottom-[43%] sm:left-[46%] \
        md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1
          className='leading-none sm-responsive-title sm:md-responsive-title md:lg-responsive-title \
          lg:xl-responsive-title'>
          <div>{t('home:titleLine1')}</div>
          <div className='relative left-[12.5%]'>{t('home:titleLine2')}</div>
          <div className='relative left-[50%]'>{t('home:titleLine3')}</div>
        </h1>
      </div>
    </div>
  )
}
