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
  const tagsWithCategoryAll = ['All', ...tags]
  const router = useRouter()

  function slideToRight() {
    slider.current.scrollLeft += 100
  }

  function slideToLeft() {
    slider.current.scrollLeft -= 100
  }
  
  return (
    <div className='relative mb-10'>
      <div className='absolute top-0 z-50 w-10 h-full left-14 bg-gradient-to-r from-blue-lighter' />
      <Button style='sliderButton' onClick={slideToLeft} 
        className='absolute top-0 left-0 p-[14px] bg-white rounded-full'>
        <ArrowLeftIcon className='w-5 h-5' />
      </Button>
      <div ref={slider} className='flex mx-16 overflow-x-hidden gap-x-3'>
        {tagsWithCategoryAll.map((tag, idx) => (
          <Link key={idx} href={idx > 1 ? `/blog?tag=${tag.toLowerCase()}` : '/blog'} 
            className={classNames((router.query.tag ? router.query.tag === tag.toLowerCase() : idx === 0)
              ? 'text-blue-medium' : 'text-blue-300 hover:text-blue-medium', 
            'text-sm 2xl:text-base font-normal relative px-5 py-3 bg-white rounded-xl whitespace-nowrap')}>
            {tag.replace(/-/g, ' ')}
          </Link>
        ))}
      </div>
      <div className='absolute top-0 z-50 w-10 h-full right-14 bg-gradient-to-l from-blue-lighter' />
      <Button style='sliderButton' onClick={slideToRight} 
        className='absolute right-0 top-0 p-[14px] bg-white rounded-full'>
        <ArrowRightIcon className='w-5 h-5' />
      </Button>
    </div>
  )
}
