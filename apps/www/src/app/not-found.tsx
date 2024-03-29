import Link from 'next/link'

export default function NotFound() {
  return (
    <div className='grid min-h-screen px-6 py-24 bg-white place-items-center sm:py-32 lg:px-8'>
      <div className='text-center'>
        <p className='text-base font-semibold text-primary-600'>404</p>
        <h1 className='title responsive-title'>Page not found</h1>
        <p className='mt-6 text-base leading-7 text-gray-600'>Sorry, we couldn’t find the page you’re looking for.</p>
        <div className='flex items-center justify-center mt-10 gap-x-6'>
          <Link
            href='/'
            className='rounded-md bg-primary-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm \
               hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 \
               focus-visible:outline-primary-600'
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  )
}
