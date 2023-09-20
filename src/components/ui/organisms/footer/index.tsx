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
      className='flex justify-center p-10 lg:h-80 bg-primary-900'>
      <div className='flex flex-col w-full space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row max-w-7xl'>
        <div className='flex-1'>
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
          </ul>
        </div>
        <div className='flex justify-between lg:flex-col'>
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
          <Button
            tone='secondary'
            onClick={() => setIsContactFormOpen(true)}
          >
            {contactUsCTA.title}
          </Button>
          <ContactForm
            isOpen={isContactFormOpen}
            setIsOpen={setIsContactFormOpen}
            {...contactUsCTA.modal}
          />
        </div>
        <div className='flex space-x-10'>
          {locations?.map((location) => (
            <a
              target='_blank'
              href={location.gMap}
              key={location.name}
              className='flex flex-col justify-between space-y-5 text-white w-52 hover:underline'
            >
              <Image
                {...location.image}
                alt={location.name}
                className='w-32'
              />
              <div>
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
