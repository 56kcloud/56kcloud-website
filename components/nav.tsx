import { useRouter } from 'next/router'
import { Disclosure, Transition } from '@headlessui/react'
import Link from 'next/link'
import classNames from '../utils/classes'
import Image from 'next/image'

import NavButton from './nav-button'

function PlusButton () {
  return (
    <Disclosure.Button>
      <Image src='/images/plus-white.png' alt='Plus icon' width={50} height={50} />
    </Disclosure.Button>
  )
}

export default function Nav () {
  const router = useRouter()

  const navigation = [
    { name: 'Home', href: '/', current: router.pathname === '/' },
    { name: 'Blog', href: '/blog', current: router.pathname === '/blog' },
    { name: 'About', href: '/about', current: router.pathname === '/about' }
  ]

  return (
    <Disclosure as='nav'>
      {({ open }) => (
        <>
          <div className='absolute top-0 left-0 z-50 min-w-full px-6 mx-auto mt-4 lg:mt-10 lg:px-12 xl:px-32'>
            <div className='relative'>
              <div className='absolute inset-y-0 right-0 flex items-center lg:hidden'>
                <NavButton image='/images/menu.svg' alt='Menu icon'>Menu</NavButton>
              </div>
              <div className='flex justify-between'>
                <div>
                  <Image className='w-auto h-16 lg:h-20' src='/images/56k-logo.svg' alt='56k logo' width={100} height={100}
                  />
                </div>
                <div className='hidden lg:flex lg:items-center'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <div className={classNames(
                          // item.current
                          //   ? 'bg-blue-900 text-white'
                          //   : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                          'px-3 font-graphik font-medium text-blue-dark'
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

          <Transition show={open} enter='transition ease-out duration-300 transform' enterFrom='translate-x-full' enterTo='-translate-x-0' leave='transition ease-out duration-300 transform' leaveFrom='-translate-x-0' leaveTo='translate-x-full'>
            <Disclosure.Panel className='static z-50 w-full h-screen lg:hidden'>
              <div className='bg-white flex flex-col flex-wrap ml-auto pt-8 px-16 w-[90%] h-full'>
                <div className='absolute left-10 top-10'>
                  <PlusButton />
                </div>
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
          </Transition>
        </>
      )}
    </Disclosure>
  )
}
