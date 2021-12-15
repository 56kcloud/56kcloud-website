import { MailIcon } from '@heroicons/react/solid'

export default function Contact () {
  const values = ['desktop', 'mobile', 'backend', 'serverless']
  const random = Math.floor(Math.random() * values.length)
  const app = values[random]

  return (
    <div className='py-16 overflow-hidden bg-blue-900 lg:py-8'>
      <div className='relative max-w-xl px-4 mx-auto lg:max-w-7xl sm:px-6 lg:px-8'>
        <div className='h-56 bg-blue-100 sm:h-72 md:absolute md:left-0 md:w-1/2 md:h-full'>
          <img
            className='object-cover w-full h-full'
            src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=84B6E1&sat=-100&blend-mode=multiply'
            alt=''
          />
        </div>
        <div className='relative px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-16'>
          <div className='md:ml-auto md:pl-10 md:w-1/2'>
            <h2 className='text-base font-semibold tracking-wider text-blue-300 uppercase'>
              Need a {app} app
            </h2>
            <p className='mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl'>
              We’re here to help
            </p>
            <p className='mt-3 text-lg text-gray-300'>
              Contact us about your project. We are always available to discuss
              new collaborations. We speak english, french and Schwizertitsch.
            </p>
            <div className='mt-8'>
              <div className='inline-flex rounded-md shadow'>
                <a
                  href='mailto:info@edeltech.ch?subject=Hello, we should talk.'
                  className='inline-flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 bg-white border border-transparent rounded-md hover:bg-gray-50'
                >
                  Get in touch
                  <MailIcon
                    className='w-5 h-5 ml-3 -mr-1 text-gray-400'
                    aria-hidden='true'
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
