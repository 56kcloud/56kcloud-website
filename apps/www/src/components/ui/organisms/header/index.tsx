'use client'

import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/outline'
import {Dialog} from '@headlessui/react'
import {Dictionary} from '@/models/dictionary.model'
import {LinkProps} from '@/models/link.model'
import {Logo} from '../../svgs/logos/56k'
import {cn} from '@/utils/toolbox'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Button from '../../atoms/button'
import LanguageSwitcher from '../../molecules/language-switcher'
import Link from 'next/link'

export type HeaderProps = {
  dictionary: Dictionary
}

export default function Header({dictionary}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigation: Array<LinkProps> = [
    {text: dictionary.blog, link: '/blog'},
    {text: dictionary.about, link: '/about'}
  ]

  const pathname = usePathname()

  const pathMatcher = (path: string) => {
    return pathname.includes(path)
  }

  return (
    <header className='absolute inset-x-0 top-0 z-50 flex justify-center'>
      <nav
        className='flex items-center justify-between w-full p-6 pt-8 lg:pt-14 max-w-7xl'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='-m-1.5 p-1.5 text-white'
          >
            <span className='sr-only'>56k Cloud</span>
            <Logo className='h-7 lg:h-8' />
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
              aria-hidden='true'
            />
          </button>
        </div>
        <div className='hidden lg:flex lg:justify-between lg:gap-x-16'>
          <div className='flex items-center gap-x-8'>
            {navigation.map((item) => (
              <a
                key={item.text}
                href={item.link}
                className='px-2 py-1 text-base font-normal leading-6 text-white'
              >
                {item.text}
              </a>
            ))}
          </div>
          <LanguageSwitcher mobileMenuOpen={mobileMenuOpen} />
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-50' />
        <Dialog.Panel
          className={cn(
            mobileMenuOpen ? 'animate-in slide-in-from-right-full' : 'animate-out slide-out-to-right-full',
            'fixed flex flex-col justify-between inset-y-0 right-0 z-50 w-full px-6 py-8 overflow-y-auto \
          bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10 duration-500 ease-in-out'
          )}
        >
          <div className='flex flex-col gap-y-12'>
            <div className='flex items-center justify-between'>
              <Link
                href='/'
                className='-m-1.5 p-1.5 text-white'
              >
                <span className='sr-only'>56k Cloud</span>
                <Logo className='h-7' />
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-400'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon
                  className='w-6 h-6'
                  aria-hidden='true'
                />
              </button>
            </div>
            <div className='flex flex-col gap-y-3'>
              {navigation.map((item) => (
                <Button
                  asChild
                  key={item.text}
                  tone='secondary'
                  variant='link'
                  className='text-base text-slate-400 hover:text-white'
                  data-active={pathMatcher(item.link)}
                >
                  <Link href={item.link}>{item.text}</Link>
                </Button>
              ))}
            </div>
          </div>
          <LanguageSwitcher mobileMenuOpen={mobileMenuOpen} />
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
