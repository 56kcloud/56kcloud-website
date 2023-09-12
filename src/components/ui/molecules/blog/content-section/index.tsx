import Markdown from 'markdown-to-jsx'
import PostCover from '../../cards/blog-post/cover'
import PostTagList from '../../cards/blog-post/tag-list'
import React from 'react'

export default function BlogContentSection({cover, tags, title, content}) {
  return (<div className='flex items-end justify-center'>
    <div 
      className='z-50 w-full h-full overflow-auto bg-white shadow-lg rounded-xl overscroll-contain'
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
              createElement(type, props, children) {
                if (children[0] === 'video') {
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
