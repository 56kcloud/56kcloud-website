import {ImageProps} from '@/models/image.model'
import {Tag} from '@/models/tag.model'
import Markdown from 'markdown-to-jsx'
import PostCover from '../../cards/cover'
import PostTagList from '../../cards/article/tag-list'
import React, {ReactNode} from 'react'

export type ArticleContentSectionProps = {
  cover: ImageProps
  tags: Array<Tag>
  title: string
  content: string
}

export default function ArticleContentSection({cover, tags, title, content}: ArticleContentSectionProps) {
  return (<div className='flex items-end justify-center w-full'>
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
          <Markdown
            options={{
              createElement(type, props: React.HTMLProps<HTMLDivElement> , children: ReactNode) {
                const element = Array.isArray(children) ? children[0] : children
                if (element === 'video') {
                  return <iframe
                    key={props['href']}
                    src={props['href']}
                    className='w-full rounded-lg h-[500px]'/>
                } else {
                  return React.createElement(type, props, children)
                }
              }
            }}
          >
            {content}
          </Markdown>
        </div>
      </div>
    </div>    
  </div>)
}
