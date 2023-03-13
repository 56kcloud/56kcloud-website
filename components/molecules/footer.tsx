import Button from '../atoms/button'
import Icon, {IconProps} from '../atoms/icon'
import Img from '../atoms/img'
import Link from 'next/link'
import classNames from '../../utils/classes'
import useTranslation from 'next-translate/useTranslation'

type FooterProps = {
  version: 'illustration' | 'blue'
  toggleIsModalOpen: () => void
}

export default function Footer ({version = 'illustration', toggleIsModalOpen}: FooterProps) {
  const {t} = useTranslation('footer')

  const links = [
    {href: '/services', title: t('link1')},
    {href: '/training', title: t('link2')},
    {href: '/partners', title: t('link3')},
    {href: '/about', title: t('link4')},
    {href: 'https://blog.56k.cloud/', title: 'Blog', target: '_blank', rel: 'noopener noreferrer'}
  ]

  const socialNetworksIcons: Array<IconProps> = [
    {
      src: '/images/twitter-icon.svg',
      alt: t('altIconTwitter')
    },
    {
      src: '/images/linkedin-icon.svg',
      alt: t('altIconLinkedin')
    }
  ]

  return (
    <div className={classNames(
      version === 'illustration'
        ? 'bg-footer-background bg-no-repeat bg-cover bg-blue-lighter'
        : 'bg-blue-dark', 'relative h-[1000px] sm:h-[850px]')}>
      <div className='absolute bottom-0 right-0 z-50 p-8 md:p-0 md:w-10/12'>
        <div className='py-8 bg-white md:py-16'>
          <div className='flex flex-wrap justify-between px-8 overflow-hidden md:px-16'>
            <p className='title mb-10 w-full xs-responsive-title leading-[1.1] lg:w-2/3 2xl:w-1/2 lg:mb-16'>
              {t('companyDescription')}
            </p>
            <Link href='/' className='hidden lg:block lg:w-1/4'>
              <Img src='/images/56k-logo.svg' alt={t('altLogo56k')} width={100} height={100} />
            </Link>
            <div className='flex flex-col flex-wrap md:flex-row lg:w-2/3 2xl:w-1/2'>
              <ul className='flex flex-wrap mb-10 font-medium lg:w-2/3 lg:mb-0'>
                {links.map((link) => (
                  <li key={link.title} className='w-1/2 mb-2'>
                    <Link href={link.href} target={link.target} rel={link.rel}>{link.title}</Link>
                  </li>
                ))}
                <Button style='linkFooter' onClick={toggleIsModalOpen}>{t('linkContactUs')}</Button>
              </ul>
              <p className='text-grey-medium lg:w-1/3'>
                56K.Cloud SA<br /> Chemin Saint-Hubert 5<br /> 1950 Sion<br /> {t('countryNameAddress')}
              </p>
            </div>
            <hr className='border-top-[1px] my-10 w-full border-slate-300' />
            <div className='flex flex-col w-full mb-10 md:flex-row lg:w-1/2 lg:mb-0'>
              <div className='w-2/5 lg:w-2/3'>
                <ul className='flex items-center mb-10 list-none gap-x-16 md:mb-0'>
                  {socialNetworksIcons.map((icon, idx) => (
                    <li key={idx} className='w-4'>
                      <Link href={icon.iconLink} target='_blank' rel='noopener noreferrer'>
                        <Icon src={icon.src} alt={icon.alt} width={100} height={100} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <p className='w-1/3 whitespace-pre text-grey-medium'>
                &copy; 56K.Cloud SA 2023 <br />{t('rightsReserved')}
              </p>
            </div>
            <p className='w-full lg:w-1/4'>
              <span className='flex items-center gap-x-3'>
                <span className='text-grey-medium'>{t('designBy')}</span>
                <Link href='https://studiovoila.com/' target='_blank' rel='noopener noreferrer'
                  className='w-16 -translate-y-[2px]'>
                  <Img src='/images/voila-logo.png' alt={t('altLogoVoila')} width={100} height={0} />
                </Link>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
