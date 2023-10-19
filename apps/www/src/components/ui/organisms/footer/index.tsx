import {LinkProps} from '@/models/cta.model'
import {Linkedin} from '../../svgs/logos/linkedin'
import {Logo} from '../../svgs/logos/56k'
import {Twitter} from '../../svgs/logos/twitter'

export type FooterProps = {
  text: string
  solutions: Array<LinkProps>
  services: Array<LinkProps>  
}

export default function Footer(props: FooterProps) {
  const companyLinks = [
    {name: 'about', link: '/about'},
    {name: 'blog', link: '/blog'}
  ]

  const socialLinks = [
    {
      name: 'Twitter',
      link: '#',
      icon: Twitter
    },
    {
      name: 'Linkedin',
      link: '#',
      icon: Linkedin
    }
  ]

  return (
    <footer
      className='bg-gray-900'
      aria-labelledby='footer-heading'>
      <h2
        id='footer-heading'
        className='sr-only'>
        Footer
      </h2>
      <div className='px-6 pt-16 pb-8 mx-auto max-w-7xl sm:pt-24 lg:px-8 lg:pt-32'>
        <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
          <div className='space-y-8'>
            <Logo className='text-white h-7'/>
            <p className='text-sm leading-6 text-gray-300'>
              {props.text}
            </p>
            <div className='flex space-x-6'>
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className='text-gray-500 hover:text-gray-400'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon
                    className='w-6 h-6 text-white'
                    aria-hidden='true'/>
                </a>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>Services</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {props.services.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.link}
                        className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white'>Solutions</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {props.solutions.map((item) => (
                    <li key={item.text}>
                      <a
                        href={item.link}
                        className='text-sm leading-6 text-gray-300 hover:text-white'>
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white'>Company</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {companyLinks.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.link}
                        className='text-sm leading-6 text-gray-300 capitalize hover:text-white'>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>&copy; 2023 56k.Cloud All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
