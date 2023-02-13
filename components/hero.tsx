export default function Hero ({ titleLine1, titleLine2, titleLine3, image }) {
  return (
    <div className='relative'>
      <div className='absolute z-50 left-1/2 bottom-[calc(40%+2.5rem)]'>
        <h1 className='text-[calc(32px+4vw)] font-semibold font-chap text-blue-dark leading-none'>
          <div>{titleLine1}</div>
          <div className='relative left-[12.5%]'>{titleLine2}</div>
          <div className='relative left-[50%]'>{titleLine3}</div>
        </h1>
      </div>
      <img className='object-cover w-full h-full' src={image} alt='' />
    </div>
  )
}
