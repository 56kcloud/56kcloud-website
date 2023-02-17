import BackgroundImage from './background-image'

export default function Hero ({ titleLine1, titleLine2, titleLine3, image }) {
  return (
    <div className='relative pt-24 bg-blue-lighter sm:pt-0 sm:bg-transparent'>
      <div className='absolute left-[41%] bottom-[40%] z-10 sm:bottom-[43%] sm:left-[46%] md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1 className='font-semibold leading-none font-chap sm-responsive-title text-blue-dark sm:md-responsive-title md:lg-responsive-title lg:xl-responsive-title'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
      <BackgroundImage image='/images/train-background.png' title='Train background' />
    </div>
  )
}
