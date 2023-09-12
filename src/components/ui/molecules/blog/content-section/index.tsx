import {ImageProps} from '@/models/image.model'
import {Tag} from '@/models/tag.model'
import Markdown from 'markdown-to-jsx'
import PostCover from '../../cards/blog-post/cover'
import PostTagList from '../../cards/blog-post/tag-list'

export type BlogContentSectionProps = {
  cover: ImageProps
  tags: Array<Tag>
  title: string
  content: string
}

export default function BlogContentSection({cover, tags, title, content}: BlogContentSectionProps) {
  return (<div className='flex items-end justify-center'>
    <div 
      className='z-50 w-full h-full overflow-auto bg-white shadow-lg max-w-7xl rounded-xl overscroll-contain'
    >
      <PostCover
        image={cover}
      />
      <div className='w-full p-10'>
        <PostTagList
          tags={tags}
        />
        <div className='max-w-full prose'>
          <h1 className='text-4xl line-clamp-2 text-grey-dark title'>
            {title}
          </h1>
          <Markdown>
            {content}
          </Markdown>
        </div>
      </div>
    </div>    
  </div>)
}
