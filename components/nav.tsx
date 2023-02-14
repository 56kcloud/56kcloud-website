import Link from 'next/link'
import { useRouter } from 'next/router'

import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

import classNames from '../utils/classes'
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
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-blue-200 rounded-md hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open main menu</span>
                  {open
                    ? (
                      <XIcon className='block w-6 h-6' aria-hidden='true' />
                    )
                    : (
                      <MenuIcon className='block w-6 h-6' aria-hidden='true' />
                    )}
                </Disclosure.Button>
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
                        <a
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
                        </a>
                      </Link>
                    ))}
                  </div>
                  <NavButton>Contact Us</NavButton>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as={Fragment}>
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-blue-900 text-white'
                          : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  </Link>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
