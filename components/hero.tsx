export default function Hero ({ title, tagline, image }) {
  return (
    <div className='relative h-150'>
      <div className='absolute inset-0'>
        <img className='object-cover w-full h-full' src={image} alt='' />
        <div
          className='absolute inset-0 bg-blue-400 mix-blend-multiply'
          aria-hidden='true'
        />
      </div>
      <div className='relative flex flex-col justify-center h-full px-4 py-24 mx-auto max-w-7xl sm:px-6 sm:py-32 lg:px-8'>
        <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl'>
          {title}
        </h1>
        <p className='max-w-4xl mt-6 text-2xl font-medium tracking-wide text-blue-50'>
          {tagline}
        </p>
      </div>
    </div>
  )
}
