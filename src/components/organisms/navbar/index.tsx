import {Dialog, Transition} from '@headlessui/react'
import {Fragment, useState} from 'react'
import {Logo} from '../../svgs/logos/56k'
import {Menu} from '../../svgs/icons/menu'
import {Pencil} from '../../svgs/icons/pencil'
import {Translate} from 'next-translate'
import {useRouter} from 'next/router'
import Button from '../../atoms/button'
import Image from 'next/image'
import LanguageSwitcher from '@/components/organisms/language-switcher'
import Link from 'next/link'

export type NavbarProps = {
  toggleIsModalOpen: () => void
  t: Translate 
  fullHeightHero: boolean
}

export default function Navbar({toggleIsModalOpen, t, fullHeightHero = false}: NavbarProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter()
  const navigation = [
    {name: t('nav:navItem1'), href: '/services'},
    {name: t('nav:navItem2'), href: '/training'},
    {name: t('nav:navItem3'), href: '/partners'},
    {name: t('nav:navItem4'), href: '/about'},
    {name: 'Blog', href: '/blog'}
  ]

  const sidebarHandler = () => {
    setSidebarOpen(false)
  }

  return (
    <div className={fullHeightHero ? '' : 'pb-24'}>
      <Transition.Root show={sidebarOpen}>
        <Dialog
          as='div'
          className='relative z-50 xl:hidden'
          onClose={setSidebarOpen}>
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
              <Dialog.Panel className='w-full h-screen bg-black/10 backdrop-blur-lg xl:hidden'>
                <div className='bg-white flex flex-col flex-wrap ml-auto pt-8 px-12 sm:px-16 w-[90%] h-screen'>
                  <div className='absolute left-[4%] sm:left-[7%] top-10'>
                    <button onClick={sidebarHandler}>
                      <Image
                        src='/images/icons/plus-white.webp'
                        alt={t('nav:altIconNavResponsive')}
                        height={48}
                        width={48}
                      />
                    </button>
                  </div>
                  <div className='flex items-center justify-between mb-auto'>
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
                    {navigation.map((item) => (
                      <Button
                        key={item.name}
                        as={Link}
                        href={item.href}
                        variant='ghost'
                        align='start'
                        className='text-2xl'
                        aria-label={item.name}
                        data-active={router.pathname === item.href}
                      >
                        {item.name}
                      </Button>
                    ))}
                  </div>
                  <div className='flex justify-center pt-8 border-t pb-28'>
                    <Button
                      onClick={toggleIsModalOpen}
                      trailing={<Pencil className='w-3.5 h-3.5 -mt-0.5 ml-3'/>}
                      size='small'
                    >
                      {t('nav:navButton')}
                    </Button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
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
                  <Logo className='w-auto h-7 lg:h-10'/>
                </Link>
              </div>
              <div className='hidden xl:flex xl:items-center xl:justify-between gap-x-12 2xl:gap-x-16'>
                <div className='flex items-center space-x-2'>
                  {navigation.map((item) => (
                    <Button
                      key={item.name}
                      as={Link}
                      href={item.href}
                      variant='ghost'
                      aria-label={item.name}
                      data-active={router.pathname === item.href}
                    >
                      {item.name}
                    </Button>
                  ))}
                  <LanguageSwitcher/>
                </div>
                <Button
                  onClick={toggleIsModalOpen}
                  trailing={<Pencil className='w-3.5 h-3.5 -mt-0.5 ml-3'/>}
                  size='small'
                >
                  {t('nav:navButton')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
