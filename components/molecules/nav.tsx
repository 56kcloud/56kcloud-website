import { Fragment, useState } from 'react'
import { useRouter } from 'next/router'
import { Dialog, Transition } from '@headlessui/react'
import Link from 'next/link'
import Img from '../atoms/img'
import NavButton from '../atoms/nav-button'

export default function Nav () {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()

  const navigation = [
    { name: 'Services', href: '/services', current: router.pathname === '/services' },
    { name: 'Training', href: '/training', current: router.pathname === '/training' },
    { name: 'Partners', href: '/partners', current: router.pathname === '/partners' },
    { name: 'About', href: '/about', current: router.pathname === '/about' },
    {
      name: 'Blog',
      href: 'https://blog.56k.cloud/',
      current: router.pathname === 'https://blog.56k.cloud/',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ]

  return (
    <div>
      <Transition.Root show={sidebarOpen}>
        <Dialog as='div' className='relative z-50 lg:hidden' onClose={setSidebarOpen}>
          <div className='fixed inset-0 z-50'>
            <Transition.Child
              as={Fragment}
              enter='transition ease-in-out duration-300 transform'
              enterFrom='translate-x-full'
              enterTo='-translate-x-0'
              leave='transition ease-in-out duration-300 transform'
              leaveFrom='-translate-x-0'
              leaveTo='translate-x-full'
            >
              <Dialog.Panel className='w-full h-screen bg-black/10 backdrop-blur-lg lg:hidden'>
                <div className='bg-white flex flex-col flex-wrap ml-auto pt-8 px-16 w-[90%] h-full'>
                  <div className='absolute left-[7%] top-10'>
                    <button onClick={() => setSidebarOpen(false)}>
                      <Img src='/images/plus-white.png' alt='Plus icon' width={50} height={50} />
                    </button>
                  </div>
                  <div className='mb-auto'>
                    <Link href='/' className='inline-block'>
                      <Img className='w-auto h-7' src='/images/56k-logo.svg' alt='56k logo' width={100} height={100} />
                    </Link>
                  </div>
                  <div className='mb-auto'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href} target={item.target} rel={item.rel}
                        className='block mb-4 text-2xl font-medium font-graphik text-blue-dark'>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <div className='py-12 text-center border-t'>
                    <NavButton src='/images/pencil.svg' alt='Pencil icon'
                      setOpen={setSidebarOpen}>Contact Us</NavButton>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className=
        'absolute top-0 left-0 z-50 min-w-full max-w-[100rem] px-6 mx-auto mt-8 lg:mt-12 lg:px-12 xl:px-32'>
        <div className='relative'>
          <div className='max-w-[100rem] mx-auto'>
            <div className='absolute inset-y-0 right-0 flex items-center xl:hidden'>
              <NavButton src='/images/menu.svg' alt='Menu icon' setOpen={setSidebarOpen}>Menu</NavButton>
            </div>
            <div className='flex justify-between'>
              <div>
                <Link href='/'>
                  <Img className='w-auto h-7 lg:h-10' src='/images/56k-logo.svg' alt='56k logo'
                    width={0} height={0} />
                </Link>
              </div>
              <div className='hidden xl:flex xl:items-center xl:justify-between gap-x-16'>
                <div className='flex space-x-14'>
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} target={item.target} rel={item.rel}>
                      <div className='px-3 font-medium'
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </div>
                    </Link>
                  ))}
                </div>
                <NavButton src='/images/pencil.svg' alt='Pencil icon' setOpen={setSidebarOpen}>Contact Us</NavButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
