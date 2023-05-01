import {NotionPageRenderer} from 'notion-to-tailwind'
import {PostPreview} from '@/models/blog/blog-preview'
import {motion} from 'framer-motion'
import PostCover from '../card/post/cover'
import PostTagList from '../card/post/tag-list'

export type PostProps = {
  post: PostPreview
  blocks?: any
}

export default function Post({post, blocks}: PostProps) {
  const postTitle = post.properties.name.title[0].text.content
  
  return (
    <motion.div
      layout
      onClick={(e) => {e.stopPropagation()}}
      layoutId={`card-${post.id}`}
      className='z-50 w-full h-[90%] bg-white max-w-7xl overflow-auto rounded-xl'>
      <PostCover
        className='max-h-[400px]'
        postId={post.id}
        src={post.cover.file.url}
        alt={post.cover.file.url}
      />
      <div className='w-full p-10'>
        <PostTagList
          postId={post.id}
          tags={post.properties.tags.multi_select}
        />
        <div className='max-w-full prose'>
          <motion.h1
            layout
            layoutId={`title-${post.id}`}
            className='text-4xl line-clamp-2 text-grey-dark title'
          >
            {postTitle}
          </motion.h1>
          <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{
              duration: 0.5
            }}
          >
            {blocks && <NotionPageRenderer blocks={blocks}/>}
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
