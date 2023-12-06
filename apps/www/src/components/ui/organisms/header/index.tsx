'use client'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Dialog} from '@headlessui/react'
import {Dictionary} from '@/models/dictionary.model'
import {LinkProps} from '@/models/link.model'
import {Logo} from '../../svgs/logos/56k'
import {useState} from 'react'
import Link from 'next/link'

type HeaderProps = {
  dictionary: Dictionary
}

export default function Header({dictionary}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation: Array<LinkProps> = [
    {text: dictionary.blog, link: '/blog'},
    {text: dictionary.about, link: '/about'}
  ]

  return (
    <header className='absolute inset-x-0 top-0 z-50 flex justify-center'>
      <nav
        className='flex items-center justify-between w-full p-6 pt-8 lg:pt-14 max-w-7xl'
        aria-label='Global'>
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='-m-1.5 p-1.5 text-white'>
            <span className='sr-only'>56k Cloud</span>
            <Logo className='h-7 lg:h-8'/>
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon
              className='w-7 h-7'
              aria-hidden='true'/>
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-16'>
          {navigation.map((item) => (
            <a
              key={item.text}
              href={item.link}
              className='text-base font-normal leading-6 text-white capitalize'>
              {item.text}
            </a>
          ))}
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className='fixed inset-0 z-50'/>
        <Dialog.Panel
          className='fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-900 \
           sm:max-w-sm sm:ring-1 sm:ring-white/10'
        >
          <div className='flex items-center justify-between'>
            <Link
              href='/'
              className='-m-1.5 p-1.5 text-white'
            >
              <span className='sr-only'>56k Cloud</span>
              <Logo className='h-8'/>
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-400'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon
                className='w-6 h-6'
                aria-hidden='true'/>
            </button>
          </div>
          <div className='flow-root mt-6'>
            <div className='-my-6 divide-y divide-gray-500/25'>
              <div className='py-6 space-y-2'>
                {navigation.map((item) => (
                  <a
                    key={item.text}
                    href={item.link}
                    className='block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg \
                     hover:bg-gray-800 capitalize'
                  >
                    {item.text}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
