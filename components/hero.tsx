export default function Hero ({ title, tagline, image }) {
  return (
    <div className='relative'>
      <div className='absolute inset-0'>
        <img className='w-full h-full object-cover' src={image} alt='' />
        <div
          className='absolute inset-0 bg-blue-400 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative mx-auto px-4 py-24 max-w-7xl sm:px-6 sm:py-32 lg:px-8'>
        <h1 className='text-white text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
          {title}
        </h1>
        <p className='mt-6 max-w-4xl text-blue-50 text-2xl font-medium tracking-wide'>
          {tagline}
        </p>
      </div>
    </div>
  )
}
