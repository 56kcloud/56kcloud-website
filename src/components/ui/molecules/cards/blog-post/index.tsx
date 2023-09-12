import {BlogPost} from '@/models/blog-post.model'
import {formatDate} from '@/utils/toolbox'
import {motion} from 'framer-motion'
import Avatar from '@/components/ui/atoms/avatar'
import Link from 'next/link'
import PostCover from './cover'
import PostTagList from './tag-list'

type BlogPostCardProps = {
  blogPost: BlogPost
}

export default function BlogPostCard({blogPost}: BlogPostCardProps) {
  const publishedOn = formatDate(blogPost.publishedOn)
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
      <Link
        href={`/blog/${blogPost.slug}`}
        className='relative flex flex-col overflow-hidden duration-200 bg-white rounded-lg shadow-lg cursor-pointer \
      hover:shadow-2xl hover:scale-105'>
        <PostCover image={blogPost.cover}/>
        <div
          className='flex flex-col py-6 pl-6 bg-white'>
          <PostTagList tags={blogPost.tags}/>
          <div className='pr-6'>
            <h1
              className='text-2xl line-clamp-2 text-grey-dark title'>
              {blogPost.title}
            </h1>
            <p 
              className='mt-2 text-base text-grey-light line-clamp-3'>
              {blogPost.description}
            </p>
            <div
              className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-light'>
              <Avatar
                image={blogPost.author.avatar.src}
                alt={blogPost.author.avatar.alt || 'author'}
              />
              <div className='flex flex-col'>
                <span>
                  by{' '}
                  <span className='font-normal text-grey-dark'>
                    {blogPost.author.name}
                  </span>
                </span>
                <div className='flex gap-x-2'>
                  <span>{publishedOn}</span>
                  <span>|</span>
                  <span>{blogPost.readTime} minute{blogPost.readTime > 1 ? 's' : ''} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
