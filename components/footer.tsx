import Link from 'next/link'
import Image from 'next/image'

export default function Footer () {
  const links = [
    { href: '#', title: 'Services' },
    { href: '#', title: 'About' },
    { href: '#', title: 'Blog' },
    { href: '#', title: 'Training' },
    { href: '#', title: 'Partners' },
    { href: '#', title: 'Contact Us' }
  ]

  const socialNetworksIcons = [
    { href: 'https://twitter.com/56kcloud', src: '/images/twitter-icon.svg', alt: 'Twitter logo' },
    { href: 'https://www.linkedin.com/company/56kcloud', src: '/images/linkedin-icon.svg', alt: 'Linkedin logo' }
  ]

  return (
    <section className="bg-[url('/images/landscape-background.png')] bg-no-repeat bg-cover relative bg-blue-lighter h-[1000px]">
      <div className='absolute bottom-0 right-0 z-50 p-8 md:p-0 md:w-10/12'>
        <div className='py-8 bg-white md:py-16'>
          <div className='flex flex-wrap justify-between px-8 overflow-hidden text-base font-light font-graphik text-blue-dark md:px-16'>
            <h3 className='mb-10 w-full font-chap text-[calc(20px+0.75vw)] font-medium leading-[1.1] lg:w-2/3 2xl:w-1/2 lg:mb-16'>
              56K.Cloud is a professional services, training and technology company focusing on cloud product acceleration, through cloud-native migration, security, developer tooling and community. We enable customers to build on public cloud technologies and accelerate their development practices through DevOps and Agile transformation.
            </h3>
            <Link href='/' className='hidden lg:block lg:w-1/4'>
              <Image src='/images/56k-logo.svg' alt='56k logo' width={100} height={100} />
            </Link>
            <div className='flex flex-col flex-wrap md:flex-row lg:w-2/3 2xl:w-1/2'>
              <ul className='flex flex-wrap mb-10 font-medium lg:w-2/3 lg:mb-0'>
                {links.map((link) => (
                  <li className='w-1/2 mb-2'>
                    <Link href={link.href}>{link.title}</Link>
                  </li>
                ))}
              </ul>
              <p className='text-grey-medium lg:w-1/3'>
                56K.Cloud GmbH<br /> Technoparkstrasse 2<br /> 8406 Winterthur<br /> Switzerland
              </p>
            </div>
            <hr className='border-top-[1px] my-10 w-full border-slate-300' />
            <div className='flex flex-col w-full mb-10 md:flex-row lg:w-1/2 lg:mb-0'>
              <div className='w-2/5 lg:w-2/3'>
                <ul className='flex mb-10 list-none gap-x-16 md:mb-0'>
                  {socialNetworksIcons.map((icon) => (
                    <li>
                      <Link href={icon.href}>
                        <Image src={icon.src} alt={icon.alt} width={18} height={18} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='w-1/3 whitespace-pre text-grey-medium'>
                Copyright (c) 2023, 56K.Cloud GmbH<br /> all rights reserved
              </p>
            </div>
            <p className='w-full lg:w-1/4'>
              <span className='flex items-center gap-x-3'>
                <span className='text-grey-medium'>Design by</span>
                <Link href='https://studiovoila.com/' className='w-16 -translate-y-[2px]'>
                  <img src='/images/voila-logo.png' alt='Voila logo' />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
