import {humanizeSecondsToMinutes, publishedPostDate} from '../../utils/toolbox'
import Avatar from '../atoms/avatar'
import Badge from '../atoms/badge'
import Img from '../atoms/img'
import Link from 'next/link'


export type BlogCardProps = {
  post: any
}

export default function BlogCard({post}: BlogCardProps) {
  const createdAt = publishedPostDate(post.properties.published_at.date, post.properties.published_at.date.start)
  const readTime = humanizeSecondsToMinutes(post.properties.read_time.number)

  const postTitle = post.properties.name.title[0].text.content
  const postDescription = 
  post.properties.description.rich_text[0] && post.properties.description.rich_text[0].text.content
  const postAvatarImage = post.properties.author.properties && post.properties.author.properties.profile_image.url
  const postAvatarImageAlt = post.properties.author.properties?.name.title[0].plain_text
  const postAuthor = post.properties.author.properties?.name.title[0].plain_text
  const postSlug = post.properties.slug.rich_text[0].plain_text

  return (
    <div className='overflow-hidden duration-200 rounded-lg shadow-lg hover:-translate-y-1 hover:shadow-2xl'>
      <Link href={{pathname: '/blog/[id]', query: {postId: post.id}}} as={`/blog/${encodeURIComponent(postSlug)}`}>
        <div className='relative flex flex-col bg-white'>
          <Img src={post.cover && post.cover.external.url} alt='Blog image' className='object-cover w-full h-auto' />
          <div className='flex flex-col p-6 bg-white'>
            <div className='flex flex-wrap gap-1 mb-5'>
              {post.properties.tags.multi_select.map((tag, idx: number) => (
                <Badge key={idx}>{tag.name}</Badge>
              ))}
            </div>
            <h3 className='text-2xl line-clamp-2 text-grey-dark title'>{postTitle}</h3>
            <p className='mt-2 text-base text-grey-light line-clamp-3'>{postDescription}</p>
            <div className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-light'>
              <Avatar image={postAvatarImage} alt={postAvatarImageAlt} />
              <div className='flex flex-col'>
                <span>by <span className='font-normal text-grey-dark'>{postAuthor}</span></span>
                <div className='flex gap-x-2'>
                  <span>{createdAt}</span>
                  <span>|</span>
                  <span>{readTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}
