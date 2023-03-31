import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/outline'
import {useRef, useState} from 'react'
import Link from 'next/link'

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
  const [scrollPosition, setScrollPosition] = useState(200)
  const tabsListRef = useRef<HTMLUListElement>(null)
  
  function scrollRight() {
    console.log(tabsListRef.current.offsetWidth+  ' ' +  scrollPosition)
    if (tabsListRef.current.offsetWidth > scrollPosition){
      setScrollPosition(scrollPosition + 200)
    }
    console.log(tabsListRef.current.offsetWidth+  ' ' +  scrollPosition)
    tabsListRef.current.scrollTo({left: scrollPosition, behavior: 'smooth'})
  }

  function scrollLeft() {
    console.log(tabsListRef.current.offsetWidth+  ' ' +  scrollPosition)
    if (0 < scrollPosition){
      setScrollPosition(scrollPosition - 200)
    }
    console.log(tabsListRef.current.offsetWidth+  ' ' +  scrollPosition)
    tabsListRef.current.scrollTo({left: scrollPosition, behavior: 'smooth'})
  }


  
  return (
    <div className='relative mb-8 max-w-7xl'> {/* Maybe remove max-w-7xl className */}
      <div className='absolute top-0 left-0 flex items-center justify-center w-10 h-full bg-gradient-to-r \
       from-blue-lighter to-transparent'>
        <ArrowLeftIcon onClick={scrollLeft} className='w-6 h-6 cursor-pointer' />
      </div>
      <ul ref={tabsListRef} className='flex overflow-x-hidden gap-x-3'>
        {tabs.map((tab, idx) => (
          <li key={idx} className='px-5 py-3 bg-white rounded-xl whitespace-nowrap'>
            <Link href={tab.href}>{tab.name}</Link>
          </li>
        ))}
      </ul>
      <div className='absolute top-0 right-0 flex items-center justify-center w-10 h-full bg-gradient-to-l \
       from-blue-lighter to-transparent'>
        <ArrowRightIcon onClick={scrollRight} className='w-6 h-6 cursor-pointer' />
      </div>
    </div>
  )
}
