export default function Hero ({ titleLine1, titleLine2, titleLine3, image }) {
  return (
    <div className='relative'>
      <div className='absolute z-50 left-[45%] bottom-[48%] sm:bottom-[43%] md:bottom-[44%] xl:bottom-[45%] sm:left-[46%] md:left-[48%] lg:left-1/2'>
        <h1 className='text-[calc(22px+3vw)] sm:text-[calc(24px+4vw)] md:text-[calc(28px+4vw)] lg:text-[calc(32px+4vw)] font-semibold font-chap text-blue-dark leading-none'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
      <img className='object-cover w-full h-full' src={image} alt='' />
    </div>
  )
}
