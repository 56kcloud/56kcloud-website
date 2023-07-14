import Image from 'next/image'

export default function HomeHero({titleLine1, titleLine2, titleLine3, background}) {  
  return (
    <div className='relative pt-24 overflow-hidden bg-white sm:pt-0'>
      <Image
        alt={'Train background'}
        src={background.src}
        placeholder='blur'
        blurDataURL={background.blurDataURL}
        width={background.width}
        height={background.height}
        className='w-full'/>
      <div
        className='title font-semibold absolute left-[41%] bottom-[40%] z-10 sm:bottom-[43%] sm:left-[46%] \
        md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1
          className='leading-none sm-responsive-title sm:md-responsive-title md:lg-responsive-title \
          lg:xl-responsive-title'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
    </div>
  )
}
