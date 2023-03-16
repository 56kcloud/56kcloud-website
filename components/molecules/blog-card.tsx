import * as humanizeDuration from 'humanize-duration'
import {format} from 'date-fns'
import Avatar from '../atoms/avatar'
import Badge from '../atoms/badge'
import Img from '../atoms/img'
import Link from 'next/link'

export type BlogCardProps = {
  post: any
}

export default function BlogCard({post}: BlogCardProps) {
  const createdAt = format(new Date(
    post.properties.published_at.date && post.properties.published_at.date.start ), 'dd MMM yyyy')
  const readTime = humanizeDuration(post.properties.read_time.number * 100000, {largest: 1})
  console.log(post)
  return (
    <div className='overflow-hidden rounded-lg shadow-lg'>
      <Link href={`/blog/${encodeURIComponent(post.id)}`}>
        <div className='relative flex flex-col'>
          <Badge>{post.properties.tags.multi_select[0] && post.properties.tags.multi_select[0].name}</Badge>
          <Img src={post.cover && post.cover.external.url} alt='Blog image' className='object-cover w-full h-72' />
          <div className='flex flex-col p-6 bg-white'>
            <h3 className='text-2xl line-clamp-2 text-grey-dark title'>{post.properties.name.title[0].text.content}</h3>
            <p className='mt-2 text-base text-grey-light line-clamp-3'>
              {post.properties.description.rich_text[0] && post.properties.description.rich_text[0].text.content}
            </p>
            <div className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-light'>
              <Avatar image={post.properties.author.properties && post.properties.author.properties.profile_image.url} 
                alt={post.properties.author.properties?.name.title[0].plain_text} />
              <div className='flex flex-col'>
                <span>by <span className='font-normal text-grey-dark'>
                  {post.properties.author.properties?.name.title[0].plain_text}
                </span></span>
                <div className='flex gap-x-2'>
                  <span>{createdAt}</span>
                  <span>|</span>
                  <span>{readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
