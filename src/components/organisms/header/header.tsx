'use client'

import * as NavbarPrimitive from '@radix-ui/react-dialog'
import {Image as ImageProps} from '@/models/image.model'
import {LinkProps} from '@/models/link.model'
import {Logo} from '../../svgs/logos/56k'
import {Menu} from '../../svgs/icons/menu'
import {usePathname} from 'next/navigation'
import {useState} from 'react'
import Button from '../../atoms/button'
import Image from 'next/image'
import LanguageSwitcher from '@/components/molecules/language-switcher'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export type HeaderProps = {
  logo: ImageProps,
  links: Array<LinkProps>
}


export default function Header({logo, links}) {
  const {t} = useTranslation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()

  const navigation: Array<LinkProps> = links.map((link) => ({
    href: link.href || '',
    children: link.title
  }))

  const sidebarHandler = () => {
    setSidebarOpen(false)
  }

  return (
    <>
      <NavbarPrimitive.Root
        open={sidebarOpen}
        onOpenChange={setSidebarOpen}>
        <NavbarPrimitive.Portal>
          <NavbarPrimitive.Overlay 
            className='fixed inset-0 z-50 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in \
            data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          />
          <NavbarPrimitive.Content
            className='fixed z-50 gap-4 flex flex-col bg-white p-8 px-12 sm:px-16 shadow-lg transition ease-in-out \
            data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 \
            data-[state=open]:duration-500 inset-y-0 right-0 h-full w-[90%] border-l \
            data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
          >
            <div className='absolute -left-10 top-10'>
              <button
                onClick={sidebarHandler}
                className='rounded-full'
              >
                <Image
                  src='/images/icons/plus-white.webp'
                  alt={t('nav:altIconNavResponsive')}
                  height={48}
                  width={48}
                />
              </button>
            </div>
            <div className='flex items-center justify-between mt-4 mb-auto'>
              <Link
                href='/'
                aria-label='56k cloud logo'>
                <Logo className='w-auto h-7'/>
              </Link>
              <div className='translate-y-[3px]'>
                <LanguageSwitcher/>
              </div>
            </div>
            <div className='mb-auto'>
              {navigation.map((item, index) => (
                <Button
                  asChild
                  key={index}
                  variant='ghost'
                  align='start'
                  className='text-2xl capitalize'
                  data-active={pathname.includes(item.href)}
                >
                  <Link href={item.href}>
                    {item.children}
                  </Link>
                </Button>
              ))}
            </div>
            <div className='flex justify-center pt-8 border-t pb-28'>
              {/* <ContactForm/> */}
            </div>
          </NavbarPrimitive.Content>
        </NavbarPrimitive.Portal>
      </NavbarPrimitive.Root>
      <div 
        className= 'absolute top-0 left-0 z-50 min-w-full max-w-[100rem] px-6 mx-auto mt-8 lg:mt-12 lg:px-12 xl:px-32'
      >
        <div className='relative'>
          <div className='max-w-[100rem] mx-auto'>
            <div className='absolute inset-y-0 right-0 flex items-center xl:hidden'>
              <Button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                trailing={<Menu className='w-3.5 h-3.5 ml-3 -mt-[1.5px]'/>}
                size='small'
              >
                Menu
              </Button>
            </div>
            <div className='flex justify-between'>
              <div>
                <Link
                  href='/'
                  aria-label='56k cloud logo'>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className='w-auto h-7 lg:h-10'
                  />
                </Link>
              </div>
              <div className='hidden xl:flex xl:items-center xl:justify-between gap-x-12 2xl:gap-x-16'>
                <div className='flex items-center space-x-2'>
                  {navigation.map((item, index) => (
                    <Button
                      key={index}
                      variant='ghost'
                      className='capitalize'
                      data-active={pathname.includes(item.href)}
                    >
                      <Link href={item.href}>
                        {item.children}
                      </Link>
                    </Button>
                  ))}
                  <LanguageSwitcher/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
