import 'pure-react-carousel/dist/react-carousel.es.css'
import {ButtonBack, ButtonNext, CarouselProvider, Slider} from 'pure-react-carousel'
import {useRouter} from 'next/router'
import Link from 'next/link'
import classNames from '../../utils/classes'

const tabs = [
  {href: '/blog', name: 'All'},
  {href: '/blog?tag=aws', name: 'AWS'},
  {href: '/blog?tag=company-news', name: 'Company News'},
  {href: '/blog?tag=5g', name: '5G'},
  {href: '/blog?tag=how-to', name: 'How To'},
  {href: '/blog?tag=iot', name: 'IoT'},
  {href: '/blog?tag=cloud', name: 'Cloud'},
  {href: '/blog?tag=docker', name: 'Docker'},
  {href: '/blog?tag=arm', name: 'ARM'},
  {href: '/blog?tag=gitlab', name: 'GitLab'},
  {href: '/blog?tag=aws-graviton', name: 'AWS Graviton'},
  {href: '/blog?tag=devops', name: 'DevOps'},
  {href: '/blog?tag=agile', name: 'Agile'},
  {href: '/blog?tag=digital-transformation', name: 'Digital Transformation'},
  {href: '/blog?tag=devsecops', name: 'DevSecOps'},
  {href: '/blog?tag=gruntworks', name: 'Gruntworks'},
  {href: '/blog?tag=github', name: 'GitHub'},
  {href: '/blog?tag=terraform', name: 'Terraform'},
  {href: '/blog?tag=edge', name: 'Edge'},
  {href: '/blog?tag=monitoring', name: 'Monitoring'},
  {href: '/blog?tag=community', name: 'Community'},
  {href: '/blog?tag=cdk', name: 'CDK'},
  {href: '/blog?tag=iac', name: 'IaC'},
  {href: '/blog?tag=azure', name: 'Azure'},
  {href: '/blog?tag=partners', name: 'Partners'}
]

export default function TabsFilter() {
  const router = useRouter()
  
  return (
    <CarouselProvider className='mb-10 overflow-hidden' naturalSlideWidth={100} naturalSlideHeight={125} 
      totalSlides={25}>
      <div className='relative flex items-center px-8'>
        <ButtonBack role='button' aria-label='slide backward' className='absolute left-0 z-50'>
          <svg width={8} height={14} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M7 1L1 7L7 13' stroke='#1f2c73' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </ButtonBack>
        <div className='absolute z-30 w-10 h-12 left-6 bg-gradient-to-r from-blue-lighter'></div>
        <Slider>
          <ul className='flex overflow-x-hidden gap-x-3'>
            {tabs.map((tab, idx) => (
              <Link key={idx} href={tab.href} className={classNames(router.asPath === tab.href 
                ? 'text-blue-medium' : 'text-blue-300 hover:text-blue-medium', 
              'text-sm 2xl:text-base font-normal relative px-5 py-3 bg-white rounded-xl whitespace-nowrap')}>
                {tab.name}
              </Link>
            ))}
          </ul>
        </Slider>
        <div className='absolute z-30 w-10 h-12 right-6 bg-gradient-to-l from-blue-lighter'></div>
        <ButtonNext role='button' aria-label='slide forward' className='absolute right-0 z-50'>
          <svg width={8} height={14} viewBox='0 0 8 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path d='M1 1L7 7L1 13' stroke='#1f2c73' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  )
}
