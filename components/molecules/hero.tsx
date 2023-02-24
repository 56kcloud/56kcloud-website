import BackgroundImage from '../atoms/background-image'

type HeroProps = {
  titleLine1: string
  titleLine2: string
  titleLine3: string
}

export default function Hero ({ titleLine1, titleLine2, titleLine3 }: HeroProps) {
  return (
    <div className='relative pt-24 sm:pt-0 sm:bg-transparent'>
      <div className='title font-semibold absolute left-[41%] bottom-[40%] z-10 sm:bottom-[43%] sm:left-[46%] \
        md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1 className='leading-none sm-responsive-title sm:md-responsive-title md:lg-responsive-title \
          lg:xl-responsive-title'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
      <BackgroundImage src='/images/train-background.png' alt='Train background' width={0} height={0} />
    </div>
  )
}
