import BackgroundImage from './background-image'

export default function Hero ({ titleLine1, titleLine2, titleLine3, image }) {
  return (
    <div className='relative'>
      <div className='absolute left-[45%] bottom-[48%] z-50 sm:bottom-[43%] sm:left-[46%] md:bottom-[44%] md:left-[48%] lg:left-1/2 xl:bottom-[45%]'>
        <h1 className='font-chap text-[calc(22px+3vw)] font-semibold leading-none text-blue-dark sm:text-[calc(24px+4vw)] md:text-[calc(28px+4vw)] lg:text-[calc(32px+4vw)]'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
      <BackgroundImage
        image='/images/train-background.png'
        title='Train background'
      />
    </div>
  )
}
