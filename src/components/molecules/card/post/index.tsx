import {PostPreview} from '@/models/blog/blog-preview'
import {formatDate, humanizeSecondsToMinutes} from '@/utils/toolbox'
import {motion} from 'framer-motion'
import {useState} from 'react'
import Avatar from '@/components/atoms/avatar'
import PostCover from './cover'
import PostTagList from './tag-list'

export type PostCardProps = {
  post: PostPreview
  setOpenedPost: (post: PostPreview) => void
}

export const variants = {
  test: {
    opacity: 1,
    transition: {
      layout: {
        duration: 0
      }
    }
  },
  basic: {}
}

export default function PostCard({post, setOpenedPost}: PostCardProps) {
  const [variant, setVariant] = useState(false)
  const createdAt = formatDate(post.properties.publishedOn.date.start)
  const readTime = humanizeSecondsToMinutes(post.properties.readTime.number)
  const postTitle = post.properties.name.title[0].text.content
  const postDescription = 
  post.properties.description.rich_text[0] && post.properties.description.rich_text[0].text.content
  const postAvatarImage = post.properties.author.properties && 
  post.properties.author.properties.profileImage.files[0].file.url
  const postAvatarImageAlt = post.properties.author.properties?.name.title[0].plain_text
  const postAuthor = post.properties.author.properties?.name.title[0].plain_text
  const postSlug = post.properties.slug.rich_text[0].plain_text
  
  const defaultProps = {
    layout: true
    // transition: {
    //   duration: 1
    // }
    // variants,
    // animate: variant
  }

  async function setPost() {
    const res = await fetch(`/api/post/${postSlug}`)
    setVariant(true)
    setOpenedPost(await res.json())
  }

  return (
    <motion.div
      layout
      id={post.id}
      layoutId={`card-${post.id}`}
      onClick={setPost}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{
        duration: 0.3
      }}
      className='relative flex flex-col overflow-hidden duration-200 bg-white rounded-lg shadow-lg cursor-pointer \
      hover:shadow-2xl hover:scale-105'>
      <PostCover
        postId={post.id}
        src={post.cover.file.url}
        alt={post.cover.file.url}
        test={true}
      />
      <motion.div
        layout
        className='flex flex-col py-6 pl-6 bg-white'>
        <PostTagList
          postId={post.id}
          tags={post.properties.tags.multi_select}
        />
        <div className='pr-6'>
          <motion.h1
            layout
            layoutId={`title-${post.id}`}
            className='text-2xl line-clamp-2 text-grey-dark title'>
            {postTitle}
          </motion.h1>
          <motion.p 
            {...defaultProps}
            className='mt-2 text-base text-grey-light line-clamp-3'>
            {postDescription}
          </motion.p>
          <motion.div
            {...defaultProps}
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 2
              // ease: 'linear'
            }}
            className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-light'>
            <Avatar
              image={postAvatarImage}
              alt={postAvatarImageAlt}/>
            <div className='flex flex-col'>
              <span>
                by{' '}
                <span className='font-normal text-grey-dark'>
                  {postAuthor}
                </span>
              </span>
              <div className='flex gap-x-2'>
                <span>{createdAt}</span>
                <span>|</span>
                <span>{readTime} read</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  )
}
