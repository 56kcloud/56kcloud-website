import Markdown from 'markdown-to-jsx'
import PostCover from '../../cards/blog-post/cover'
import PostTagList from '../../cards/blog-post/tag-list'

export default function BlogContentSection({cover, tags, title, content}) {
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
