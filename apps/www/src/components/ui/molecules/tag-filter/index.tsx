import {ChevronLeftIcon, ChevronRightIcon} from 'lucide-react'
import {Tag} from '@/models/tag.model'
import {toQueryParam} from '@/utils/toolbox'
import {useEffect, useRef} from 'react'
import {useRouter} from 'next/router'
import Link from 'next/link'

export type TagFilterProps = {
  tags: Array<Tag>
}

export default function TagFilter({tags}: TagFilterProps) {
  const router = useRouter()
  const slider = useRef<HTMLDivElement>(null)
  const tagsList = [{name: 'all'}, ...tags]
  
  function slide(direction: 'left' | 'right') {
    const scroll =  direction === 'right' ? 400 : -400
    slider.current?.scrollBy({left: scroll, behavior: 'smooth'})
  }

  useEffect(() => {
    if (router.query.tag) {
      const element = document.getElementById(router.query.tag.toString())
      if (element) {
        const scroll = element.offsetLeft - (element.offsetWidth + element.offsetWidth/2)
        slider.current?.scrollTo({left: scroll, behavior: 'smooth'})
      }
    }
  }, [router.query.tag])
  
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='relative flex w-full mt-10 border-b max-w-7xl'>
        <div className='absolute left-0 flex h-full'>
          <button
            onClick={() => slide('left')} 
            aria-label='left'
            className='h-full px-3 text-primary-500/50 hover:text-primary-500'
          >
            <ChevronLeftIcon className='w-5 h-5'/>
          </button>
          <div className='top-0 z-30 w-10 h-full left-10 2xl:right-14 bg-gradient-to-r from-primary-50'/>
        </div>
        <div
          id='tags-slider'
          ref={slider}
          className='flex h-full px-4 mx-12 overflow-x-auto 2xl:mx-16 gap-x-3'>
          {tagsList.map((tag, idx) => (
            <Link
              shallow={true}
              key={idx}
              id={toQueryParam(tag.name)}
              href={`/blog${idx > 0 ? `?tag=${toQueryParam(tag.name)}` : ''}`}
              data-active={router.query.tag ? router.query.tag === toQueryParam(tag.name) : idx === 0}
              className='capitalize rounded-none whitespace-nowrap border-b border-transparent / 
              py-2 px-3 font-normal text-primary-500/50 hover:text-primary-500
              data-[active=true]:border-primary-500 data-[active=true]:text-primary-500'
            >
              {tag.name.replace(/-/g, ' ')}
            </Link>
          ))}
        </div>
        <div className='absolute right-0 flex h-full'>
          <div className='top-0 z-30 w-10 h-full right-12 2xl:right-14 bg-gradient-to-l from-primary-50'/>
          <button
            onClick={() => slide('right')} 
            aria-label='right'
            className='h-full px-3 text-primary-500/50 hover:text-primary-500'
          >
            <ChevronRightIcon className='w-5 h-5'/>
          </button>
        </div>
      </div>
    </div>
  )
}
