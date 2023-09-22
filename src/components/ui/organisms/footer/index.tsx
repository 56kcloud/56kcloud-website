import {FooterProps} from './footer.model'
import {useState} from 'react'
import Button from '@/components/ui/atoms/button'
import ContactForm from '../contact-form'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer({logo, links, locations, contactUsCTA}: FooterProps) {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false)
  return (
    <footer
      className='flex justify-center w-full px-10 pt-12 pb-16 lg:h-80 bg-primary-900'>
      <div className='flex flex-col w-full space-y-10 lg:space-y-0 lg:space-x-10 lg:flex-row max-w-7xl'>
        <div className='flex flex-col flex-1 space-y-10 lg:space-y-0 lg:space-x-10 sm:flex-row'>
          <div className='flex items-start flex-1 lg:flex-col lg:pt-10'>
            <Link
              href='/'
              aria-label='56k logo'
            >
              <Image
                {...logo}
                alt='altLogo56k'
                className='w-40'
              />
            </Link>
          </div>
          <div className='flex items-center flex-1 lg:pt-3'>
            <ul className='space-y-2'>
              {links.map((link, index) => (
                <li
                  key={index}
                  className='w-1/2 mb-2'>
                  <Button
                    asChild
                    variant='link'
                    tone='white'
                    align='start'
                    className='capitalize w-max'
                  >
                    <Link href={link.href}>
                      {link.children}
                    </Link>
                  </Button>
                </li>
              ))}
              <li>
                <Button
                  tone='white'
                  variant='link'
                  align='start'
                  onClick={() => setIsContactFormOpen(true)}
                >
                  {contactUsCTA.title}
                </Button>
                <ContactForm
                  isOpen={isContactFormOpen}
                  setIsOpen={setIsContactFormOpen}
                  {...contactUsCTA.modal}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col space-y-10 sm:space-y-0 sm:space-x-10 md:space-x-36 sm:flex-row'>
          {locations?.map((location) => (
            <a
              target='_blank'
              href={location.gMap}
              key={location.name}
              className='flex items-center space-x-5 text-white hover:underline'
            >
              <Image
                {...location.image}
                alt={location.name}
                className='w-32 aspect-square'
              />
              <div className='ml-2'>
                <p>{location.address}</p>
                <p>{location.zipCode} {location.city}</p>
                <p>{location.country}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
