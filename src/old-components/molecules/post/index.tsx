import {NotionPageRenderer} from 'notion-to-tailwind'
import {NotionPostPreview} from '@/models/blog/blog-preview'
import PostCover from '../card/post/cover'
import PostTagList from '../card/post/tag-list'

export type PostProps = {
  post: NotionPostPreview
  blocks?: Array<unknown>
}

export default function PostDetail({post, blocks}: PostProps) {
  const postTitle = post.properties.name.title[0].text.content
  return (
    <div className='z-50 w-full h-full overflow-auto bg-white shadow-lg max-w-7xl rounded-xl overscroll-contain'>       
      <PostCover
        className='max-h-[400px]'
        src={post.cover.file.url}
        alt={post.cover.file.url}
      />
      <div className='w-full p-10'>
        <PostTagList
          tags={post.properties.tags.multi_select}
        />
        <div className='max-w-full prose'>
          <h1 className='text-4xl line-clamp-2 text-grey-dark title'>
            {postTitle}
          </h1>
          <div>
            {blocks && <NotionPageRenderer
              openGraphURL={'/api/og'}
              blocks={blocks}/>
            }
          </div>
        </div>
      </div>
    </div>    
  )
}
