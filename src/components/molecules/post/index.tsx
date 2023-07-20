import {NotionPageRenderer} from 'notion-to-tailwind'
import {NotionPostPreview} from '@/models/blog/blog-preview'
import AuthorCard from '../card/author'
import Markdown from 'markdown-to-jsx'
import PostCardList from '@/components/organisms/card-list/post'
import PostCover from '../card/post/cover'
import PostTagList from '../card/post/tag-list'

export default function PostDetail(props) {
  console.log(props)
  return (
    <div className='flex flex-col items-center'>
      <div className='w-full p-3 space-y-10 md:space-y-16 xl:p-10 max-w-7xl'>
        <div className='flex items-end justify-center'>
          <div 
            className='z-50 w-full h-full overflow-auto bg-white shadow-lg max-w-7xl rounded-xl overscroll-contain'
          >
            <PostCover
              className='max-h-[400px]'
              image={props.cover}
            />
            <div className='w-full p-10'>
              <PostTagList
                tags={props.tags}
              />
              <div className='max-w-full prose'>
                <h1 className='text-4xl line-clamp-2 text-grey-dark title'>
                  {props.title}
                </h1>
                <Markdown>
                  {props.content}
                </Markdown>
              </div>
            </div>
          </div>    
        </div>
        <AuthorCard author={props.author}/>
      </div>    
    </div>    
  )
}
