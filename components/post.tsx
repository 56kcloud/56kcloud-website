import Link from 'next/link'
import { slugify } from '../lib/utilities'

const Post = ({ data }) => {
  return (
    <Link href={`/blog/${encodeURIComponent(data.id)}`} key={data.id}>
      <a className='flex flex-col overflow-hidden rounded-lg shadow-lg'>
        <div className='flex-shrink-0 border-b'>
          <img className='object-cover w-full h-48' src={data.image} alt='' />
        </div>
        <div className='flex flex-col justify-between flex-1 p-6 bg-white'>
          <div className='flex-1'>
            <p className='text-sm font-medium text-blue-500'>
                    Article
            </p>
            <a href={''} className='block mt-2'>
              <p className='text-xl font-semibold text-gray-900'>{data.title}</p>
              <p className='mt-3 text-base text-gray-500'>{data.excerpt}</p>
            </a>
          </div>
          <Link href={`/about#${slugify(data.author)}`}>
            <a className='flex items-center mt-6'>
              <div className='flex-shrink-0'>
                <span className='sr-only'>{data.author}</span>
                <div className='overflow-hidden rounded-full '>
                  <img className='object-cover w-10 h-10' src={data.authorAvatar} alt='' />
                </div>
              </div>
              <div className='ml-3'>
                <p className='text-sm font-medium text-gray-900 hover:underline'>
                  {data.author}
                </p>
                <div className='flex space-x-1 text-sm text-gray-500'>
                  <time dateTime={data.date}>{data.date}</time>
                </div>
              </div>
            </a>
          </Link>
        </div>
      </a>
    </Link>
  )
}

export default Post
