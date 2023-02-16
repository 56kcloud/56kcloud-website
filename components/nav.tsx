import Link from 'next/link'
import { useRouter } from 'next/router'
import classNames from '../utils/classes'
import { Disclosure, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'
import Image from 'next/image'

import NavButton from './nav-button'

export default function Nav () {
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/' },
    { name: 'Blog', href: '/blog', current: router.pathname === '/blog' },
    { name: 'About', href: '/about', current: router.pathname === '/about' }
  ]

  return (
    <Disclosure as='nav' className='z-10'>
      {({ open }) => (
        <>
          <div className='absolute top-0 left-0 z-50 min-w-full px-6 mx-auto mt-4 lg:mt-10 lg:px-12 xl:px-32'>
            <div className='relative flex items-center'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                {/* Mobile menu button */}
                {open
                  ? (
                    <NavButton image='/images/menu.svg' alt='Menu icon'>Menu</NavButton>
                  )
                  : (
                    <NavButton image='/images/menu.svg' alt='Menu icon'>Menu</NavButton>
                  )}
              </div>
              <div className='flex items-center justify-between flex-1'>
                <div className='flex items-center flex-shrink-0'>
                  <img
                    className='w-auto h-16 lg:h-20'
                    src='/images/56k-logo.svg'
                    alt='56k logo'
                  />
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div
                          className={classNames(
                            // item.current
                            //   ? 'bg-blue-900 text-white'
                            //   : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                            // 'text-md px-3 py-2 font-medium rounded-md uppercase'
                            'text-md rounded-md px-3 py-2 font-graphik font-medium text-blue-dark'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                  <NavButton image='/images/pencil.svg' alt='Pencil icon'>Contact Us</NavButton>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='absolute z-50 w-full h-screen lg:hidden'>
            <div className='bg-white flex flex-col flex-wrap ml-auto pt-8 px-16 w-[90%] h-full'>
              <div className='mb-auto'>
                <Link href='/' className='inline-block'>
                  <Image src='/images/56k-logo.svg' alt='56k logo' width={100} height={100} />
                </Link>
              </div>
              <div className='mb-auto'>
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href} className='block mb-4 text-2xl font-medium font-graphik text-blue-dark'>
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-12 text-center border-t'>
                <NavButton image='/images/pencil.svg' alt='Pencil icon'>Contact Us</NavButton>
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
