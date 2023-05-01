import {ArrowLeftIcon, ArrowRightIcon} from '@heroicons/react/outline'
import {Tag} from '@/models/tag.model'
import {useRef} from 'react'
import Button from '@/components/atoms/button'
import Link from 'next/link'
export type TabsFilterProps = {
  tags: Array<Tag>
}
export default function TagsFilter({tags}: TabsFilterProps) {
  const slider = useRef(null)
  
  function slide(direction: 'left' | 'right') {
    slider.current.scrollBy({left: direction === 'right' ? 200 : -200, behavior: 'smooth'})
  }
  
  return (
    <div className='relative mb-10'>
      <div className='absolute top-0 z-30 w-10 h-full left-10 2xl:left-14 bg-gradient-to-r from-primary-50'/>
      <Button
        onClick={() => slide('left')}
        shape='circle'
        tone='white'
        className='absolute z-40 h-full !p-3.5'
      >
        <ArrowLeftIcon className='w-5 h-5'/>
      </Button>
      <div
        ref={slider}
        className='flex mx-12 overflow-x-hidden 2xl:mx-16 gap-x-3'>
        {tags.map((tag, idx) => (
          <Button
            shallow={true}
            as={Link}
            key={idx}
            tone='white'
            href={`/blog${idx > 0 ? `?tag=${tag.name.toLowerCase()}` : ''}`}
            className='capitalize whitespace-nowrap'
          >
            {tag.name.replace(/-/g, ' ')}
          </Button>
        ))}
      </div>
      <div className='absolute top-0 z-30 w-10 h-full right-12 2xl:right-14 bg-gradient-to-l from-primary-50'/>
      <Button
        onClick={() => slide('right')} 
        className='absolute top-0 right-0 z-40 h-full !p-3.5'
        tone='white'
        shape='circle'
      >
        <ArrowRightIcon className='w-5 h-5'/>
      </Button>
      {/* </div> */}
    </div>
  )
}
