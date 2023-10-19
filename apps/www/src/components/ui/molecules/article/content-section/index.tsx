import {ImageProps} from '@/models/image.model'
import {MarkdownViewer} from '../../mardown'
import {Tag} from '@/models/tag.model'
import PostCover from '../../cards/cover'
import PostTagList from '../../cards/article/tag-list'
import React from 'react'

export type ArticleContentSectionProps = {
  image: ImageProps
  tags: Array<Tag>
  title: string
  content: string
}

export default function ArticleContentSection({image, tags, title, content}: ArticleContentSectionProps) {
  content = `# ${title} \n ${content}`
  return (<div className='flex items-end justify-center w-full'>
    <div 
      className='z-50 w-full h-full overflow-auto bg-white shadow-lg max-w-7xl rounded-xl overscroll-contain'
    >
      <PostCover
        image={image}
      />
      <div className='w-full p-10'>
        <PostTagList
          tags={tags}
        />
        <div className='max-w-full prose'>
          <MarkdownViewer
            content={content}
            className='px-0'/>
        </div>
      </div>
    </div>    
  </div>)
}
