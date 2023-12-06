'use client'

import {Bookmark} from '../bookmark'
import {DynamicImage} from '../../atoms/dynamic-image'
import {Tweet} from 'react-twitter-widgets'
import {cn, getTweetId, isFromTwitter} from '@/utils/toolbox'
import Markdown from 'markdown-to-jsx'
import React from 'react'

export function MarkdownViewer({content, className}: {content: string, className?: string}) {
  return (
    <div className='flex justify-center w-full'>
      <div className={cn('w-full px-4 leading-6 prose prose-invert max-w-7xl prose-config', className)}>
        <Markdown
          options={{
            createElement(type, props: React.HTMLProps<HTMLDivElement> , children: React.ReactNode) {
              const element = Array.isArray(children) ? children[0] : children
              props.className = cn(props.className, element?.type === 'img' ? 'bg-white' : '')
              if (element === 'video') {
                return <iframe
                  key={props['href']}
                  src={props['href']}
                  className='w-full rounded-lg h-[500px]'/>
              } else if (element?.type === 'img') {
                return (
                  <div
                    className='flex flex-col items-center justify-center'
                    key={element.props['src']}
                  >
                    <DynamicImage
                      src={element.props['src']}
                      className='!mb-0 bg-white'
                    />
                  </div>
                )
              } else if (type === 'p' && element.type === 'a') {
                return (
                  isFromTwitter(element.props['href'])
                    ? <Tweet
                      key={element.props['href']}
                      tweetId={getTweetId(element.props['href'])}
                      options={{align: 'center'}}
                    />
                    : <Bookmark
                      url={element.props['href']}
                      key={element.props['href']}
                    />
                )
              } 
              else {
                return React.createElement(type, props, children)
              }
            }
          }}
        >
          {content}
        </Markdown>
      </div>
    </div>
  )
}
