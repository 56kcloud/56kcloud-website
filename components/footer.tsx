import BackgroundImage from './background-image'

export default function Footer () {
  return (
    <section className='relative'>
      <div className='absolute bottom-0 right-0 z-50 pl-80'>
        <div className='py-16 mx-auto bg-white'>
          <div className='flex flex-wrap justify-between pl-16'>
            <h3 className='mb-16 w-1/2 font-chap text-[calc(20px+0.75vw)] font-medium leading-[1.1] text-blue-dark'>
              56K.Cloud is a professional services, training and technology
              company focusing on cloud product acceleration, through
              cloud-native migration, security, developer tooling and community.
              We enable customers to build on public cloud technologies and
              accelerate their development practices through DevOps and Agile
              transformation.
            </h3>
            <a href='/' className='block w-1/4'>
              <img
                src='/images/56k-logo.svg'
                alt='56k logo'
                className='w-auto h-16'
              />
            </a>
            <div className='flex w-1/2'>
              <ul className='flex flex-wrap flex-1'>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    Services
                  </a>
                </li>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    About
                  </a>
                </li>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    Blog
                  </a>
                </li>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    Training
                  </a>
                </li>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    Partners
                  </a>
                </li>
                <li className='w-1/2 mb-2'>
                  <a
                    href='#'
                    className='text-base font-medium text-blue-900 font-graphik'
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
              <p className='w-1/3 text-base font-light font-graphik text-grey-medium'>
                56K.Cloud GmbH <br />
                Technoparkstrasse 2 <br />
                8406 Winterthur <br />
                Switzerland
              </p>
            </div>
            <hr className='border-top-[1px] my-10 w-full border-slate-300' />
            <div className='flex w-1/2'>
              <div className='flex-1'>
                <ul className='flex list-none gap-x-16'>
                  <li>
                    <a href='https://twitter.com/56kcloud'>
                      <img
                        src='/images/twitter-icon.svg'
                        alt='Twitter logo'
                        className='w-auto h-4'
                      />
                    </a>
                  </li>
                  <li>
                    <a href='https://www.linkedin.com/company/56kcloud'>
                      <img
                        src='/images/linkedin-icon.svg'
                        alt='Linkedin logo'
                        className='w-auto h-4'
                      />
                    </a>
                  </li>
                </ul>
              </div>
              <p className='w-1/3 text-base font-light whitespace-pre font-graphik text-grey-medium'>
                Copyright (c) 2023, 56K.Cloud GmbH <br />
                all rights reserved
              </p>
            </div>
            <p className='w-1/4'>
              <span className='flex items-center gap-x-3'>
                <span className='text-base font-light font-graphik text-grey-medium'>
                  Design by
                </span>
                <a href='https://studiovoila.com/' className='w-16 -translate-y-[2px]'>
                  <img src='/images/voila-logo.png' alt='Voila logo' />
                </a>
              </span>
            </p>
          </div>
        </div>
      </div>
      <BackgroundImage
        image='/images/landscape-background.png'
        title='Landscape background'
      />
    </section>
  )
}
