import {FooterProps} from './footer.model'
import {LinkProps} from '@/models/link.model'
import {Linkedin, MapPin, Twitter} from 'lucide-react'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'
import voila from '../../../../../public/images/logos/voila.webp'

export default function Footer({background='cover', logo, links, title, locations}: FooterProps) {
  console.log(locations)
  // const externalLinks: Array<LinkProps> = [
  //   {
  //     href: gMapAddress,
  //     children: <MapPin className='w-4 h-4'/>,
  //     alt: 'altIconGMaps',
  //     className: 'block lg:hidden'
  //   },
  //   {
  //     href: 'https://twitter.com/56kcloud',
  //     children: <Twitter className='w-4 h-4'/>,
  //     alt: 'altIconTwitter'
  //   },
  //   {
  //     href: 'https://www.linkedin.com/company/56kcloud',
  //     children: <Linkedin className='w-4 h-4'/>,
  //     alt: 'altIconLinkedin'
  //   }
  // ]


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
          >
          Contact Us
          </Button>
        </div>
        <div className='flex justify-between space-x-10'>
          {locations?.map((location) => (
            <a
              target='_blank'
              href={location.gMap}
              key={location.name}
              className='flex flex-col space-y-5 text-white w-52 hover:underline'
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
