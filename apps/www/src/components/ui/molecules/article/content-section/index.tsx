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
  return (<div className='flex items-center justify-center py-24 sm:py-32'>
    <div className='px-6 mx-auto max-w-7xl lg:px-8'>
      <div 
        className='z-50 w-full h-full overflow-auto bg-white/5 max-w-7xl rounded-xl overscroll-contain'
      >
        <PostCover
          image={image}
        />
        <div className='w-full p-10'>
          <PostTagList
            tags={tags}
          />
          <div className='max-w-full'>
            <MarkdownViewer
              content={content}
              className='px-0'/>
          </div>
        </div>
      </div>    
    </div>
  </div>)
}
