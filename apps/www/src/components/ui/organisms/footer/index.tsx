import {Dictionary} from '@/models/dictionary.model'
import {LinkProps, SocialLinks} from '@/models/link.model'
import {Service} from '@/models/service.model'
import {Solution} from '@/models/solution.model'
import Button from '../../atoms/button'
import Linkedin from '../../svgs/logos/linkedin'
import Logo from '../../svgs/logos/56k'
import NewsletterForm from '@/components/ui/organisms/footer/newsletter-form'
import X from '../../svgs/logos/x'

export type FooterProps = {
  dictionary: Dictionary
  text: string
  solutions: Array<Pick<Solution, 'title' | 'slug'>>
  services: Array<Pick<Service, 'title' | 'slug'>>
}

export default function Footer(props: FooterProps) {
  const companyLinks: Array<LinkProps> = [
    {text: props.dictionary.about, link: '/about'},
    {text: props.dictionary.blog, link: '/blog'}
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
    <footer aria-labelledby='footer-heading'>
      <h2
        id='footer-heading'
        className='sr-only'
      >
        Footer
      </h2>
      <div className='px-6 pt-20 pb-8 mx-auto max-w-7xl lg:px-8 lg:pt-[104px]'>
        <div className='flex flex-col gap-y-[72px] xl:flex-row xl:justify-between'>
          <div className='max-w-full space-y-8 xl:max-w-sm'>
            <Logo className='h-5 text-white' />
            <p className='text-sm leading-[26px] text-slate-400 font-light'>{props.text}</p>
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
                      className='w-5 h-5 text-slate-400'
                      aria-hidden='true'
                    />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div className='flex flex-col gap-12 md:flex-row md:justify-between md:gap-28'>
            <div>
              <h3 className='text-sm font-normal text-white capitalize'>{props.dictionary.services}</h3>
              <ul
                role='list'
                className='mt-6 space-y-4'
              >
                {props.services.map((item) => (
                  <li key={item.slug}>
                    <Button
                      asChild
                      tone='secondary'
                      variant='link'
                      className='font-light text-slate-400'
                    >
                      <a
                        href={`/services/${item.slug}`}
                        className='text-sm leading-6 text-gray-300 hover:text-white'
                      >
                        {item.title}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-normal text-white capitalize'>{props.dictionary.solutions}</h3>
              <ul
                role='list'
                className='mt-6 space-y-4'
              >
                {props.solutions.map((item) => (
                  <li key={item.slug}>
                    <Button
                      asChild
                      tone='secondary'
                      variant='link'
                      className='font-light text-slate-400'
                    >
                      <a href={`/solutions/${item.slug}`}>{item.title}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className='text-sm font-normal text-white capitalize'>{props.dictionary.company}</h3>
              <ul
                role='list'
                className='mt-6 space-y-4'
              >
                {companyLinks.map((item) => (
                  <li key={item.text}>
                    <Button
                      key={item.text}
                      asChild
                      tone='secondary'
                      variant='link'
                      className='font-light text-slate-400'
                    >
                      <a href={item.link}>{item.text}</a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <NewsletterForm dictionary={props.dictionary} />
        <div className='pt-8 mt-10 border-t border-slate-800 sm:mt-14'>
          <p className='text-xs font-light text-slate-400'>&copy; 56K.Cloud 2023 – All rights reserved.</p>N
        </div>
      </div>
    </footer>
  )
}
