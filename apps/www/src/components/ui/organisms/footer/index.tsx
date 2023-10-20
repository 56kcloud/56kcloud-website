import {LinkProps, SocialLinks} from '@/models/link.model'
import {Linkedin} from '../../svgs/logos/linkedin'
import {Logo} from '../../svgs/logos/56k'
import {X} from '../../svgs/logos/x'
import Button from '../../atoms/button'
import useTranslation from 'next-translate/useTranslation'

export type FooterProps = {
  text: string
  solutions: Array<LinkProps>
  services: Array<LinkProps>  
}

export default function Footer(props: FooterProps) {
  const {t} = useTranslation()
  
  const companyLinks: Array<LinkProps> = [
    {text: 'About', link: '/about'},
    {text: 'Blog', link: '/blog'}
  ]

  const socialLinks: Array<SocialLinks> = [
    {
      text: 'X',
      link: 'https://x.com/56kcloud',
      icon: X
    },
    {
      text: 'Linkedin',
      link: 'https://www.linkedin.com/company/56kcloud',
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
            <div className='flex items-center space-x-6'>
              {socialLinks.map((item) => (
                <Button
                  key={item.text}
                  asChild
                  tone='secondary'
                  variant='link'
                >
                  <a
                    href={item.link}
                    target='_blank'
                  >
                    <span className='sr-only'>{item.text}</span>
                    <item.icon
                      className='w-6 h-6 text-white'
                      aria-hidden='true'/>
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0'>
            <div className='md:grid md:grid-cols-2 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white capitalize'>{t('services')}</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {props.services.map((item) => (
                    <li key={item.link}>
                      <Button
                        key={item.text}
                        asChild
                        tone='secondary'
                        variant='link'
                      >
                        <a
                          href={item.link}
                          className='text-sm leading-6 text-gray-300 hover:text-white'>
                          {item.text}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className='mt-10 md:mt-0'>
                <h3 className='text-sm font-semibold leading-6 text-white capitalize'>{t('solutions')}</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {props.solutions.map((item) => (
                    <li key={item.link}>
                      <Button
                        key={item.text}
                        asChild
                        tone='secondary'
                        variant='link'
                      >
                        <a href={item.link}>
                          {item.text}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className='md:grid md:grid-cols-1 md:gap-8'>
              <div>
                <h3 className='text-sm font-semibold leading-6 text-white capitalize'>{t('company')}</h3>
                <ul
                  role='list'
                  className='mt-6 space-y-4'>
                  {companyLinks.map((item) => (
                    <li key={item.text}>
                      <Button
                        key={item.text}
                        asChild
                        tone='secondary'
                        variant='link'
                      >
                        <a href={item.link}>
                          {item.text}
                        </a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className='pt-8 mt-16 border-t border-white/10 sm:mt-20 lg:mt-24'>
          <p className='text-xs leading-5 text-gray-400'>&copy; 2023 56k.Cloud {t('services')}.</p>
        </div>
      </div>
    </footer>
  )
}
