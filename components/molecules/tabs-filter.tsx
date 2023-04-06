import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/outline'
import {useRef} from 'react'
import {useRouter} from 'next/router'
import Button from '../atoms/button'
import Link from 'next/link'
import classNames from '../../utils/classes'

export type TabsFilterProps = {
  tags: Array<string>
}

export default function TabsFilter({tags}: TabsFilterProps) {
  const slider = useRef(null)
  const router = useRouter()

  function slideToRight() {
    slider.current.scrollBy({left: 200, behavior: 'smooth'})
  }
  
  function slideToLeft() {
    slider.current.scrollBy({left: -200, behavior: 'smooth'})
  }
  
  return (
    <div className='relative mb-10'>
      <div className='absolute top-0 z-30 w-10 h-full left-10 2xl:left-14 bg-gradient-to-r from-blue-lighter' />
      <Button style='sliderButton' onClick={slideToLeft} 
        className='absolute top-0 z-50 left-0 p-3 2xl:p-[14px] bg-white rounded-full'>
        <ArrowLeftIcon className='w-5 h-5' />
      </Button>
      <div ref={slider} className='flex mx-12 overflow-x-hidden 2xl:mx-16 gap-x-3'>
        {tags.map((tag, idx) => (
          <Link key={idx} href={idx > 1 ? `/blog?tag=${tag.toLowerCase()}` : '/blog'} 
            className={classNames((router.query.tag ? router.query.tag === tag.toLowerCase() : idx === 0)
              ? 'text-blue-medium' : 'text-blue-300 hover:text-blue-medium', 
            'text-sm 2xl:text-base font-normal relative px-5 py-3 bg-white rounded-lg whitespace-nowrap')}>
            {tag.replace(/-/g, ' ')}
          </Link>
        ))}
      </div>
      <div className='absolute top-0 z-30 w-10 h-full right-12 2xl:right-14 bg-gradient-to-l from-blue-lighter' />
      <Button style='sliderButton' onClick={slideToRight} 
        className='absolute z-50 right-0 top-0 p-3 2xl:p-[14px] bg-white rounded-full'>
        <ArrowRightIcon className='w-5 h-5' />
      </Button>
    </div>
  )
}
