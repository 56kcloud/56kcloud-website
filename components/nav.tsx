import Link from 'next/link'
import { useRouter } from 'next/router'
import { Fragment } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import useTranslation from 'next-translate/useTranslation'

function classNames (...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Nav () {
  const router = useRouter()
  const { t } = useTranslation('common')
  const navigation = [
    { name: t('blog'), href: '/blog', current: router.pathname === '/blog' },
    { name: t('about'), href: '/about', current: router.pathname === '/about' }
  ]

  return (
    <Disclosure as='nav' className='fixed z-10 w-full bg-blue-900 bg-opacity-40 backdrop-filter backdrop-blur'>
      {({ open }) => (
        <>
          <div className='px-2 mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative flex items-center justify-between h-16'>
              <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='inline-flex items-center justify-center p-2 text-blue-200 rounded-md hover:text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
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
              <div className='flex items-center justify-center flex-1 sm:items-stretch sm:justify-start'>
                <div className='flex items-center flex-shrink-0'>
                  <Link href={'/'}>
                    <a>
                      <img
                        className='block w-auto h-10'
                        src='/images/edeltech-flower.svg'
                        alt='Workflow'
                      />
                    </a>
                  </Link>
                </div>
                <div className='hidden sm:block sm:ml-6'>
                  <div className='flex space-x-4'>
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? 'bg-transparent text-white'
                              : 'text-blue-300',
                            'text-md px-3 py-2 font-medium rounded-md uppercase hover:bg-blue-700 hover:text-white'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Disclosure.Panel className='sm:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as={Fragment}>
                  <Link key={item.name} href={item.href}>
                    <a
                      className={classNames(
                        item.current
                          ? 'bg-transparent text-white'
                          : 'text-blue-300 hover:bg-blue-700 hover:text-white',
                        'block px-3 py-2 text-base font-medium rounded-md uppercase'
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
