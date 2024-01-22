'use client'

import {ReactNode} from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {Tweet} from 'react-twitter-widgets'
import {atomDark} from 'react-syntax-highlighter/dist/esm/styles/prism'
import {cn, getTweetId, isFromTwitter} from '@/utils/toolbox'
import Bookmark from '../bookmark'
import DynamicImage from '../../atoms/dynamic-image'
import Markdown from 'markdown-to-jsx'
import React from 'react'

export type MarkdownViewerProps = {
  content: string
  className?: string
}

export default function MarkdownViewer({content, className}: MarkdownViewerProps) {
  return (
    <div className='flex justify-center w-full'>
      <div className={cn('w-full px-4 leading-6 prose prose-invert max-w-7xl prose-config', className)}>
        <Markdown
          options={{
            createElement(type, props: React.HTMLProps<HTMLDivElement>, children) {
              const element = Array.isArray(children) ? children[0] : children
              props.className = cn(props.className, element?.type === 'img' ? 'bg-white' : '')
              if (type === 'pre') {
                const language = (children as React.ReactElement).props.className?.replace('lang-', '')
                return (
                  <pre
                    className='not-prose'
                    key={props.key}
                  >
                    <SyntaxHighlighter
                      language={language}
                      style={atomDark}
                    >
                      {element.props.children}
                    </SyntaxHighlighter>
                  </pre>
                )
              } else if (element === 'video') {
                return (
                  <iframe
                    key={props['href']}
                    src={props['href']}
                    className='w-full rounded-lg h-[500px]'
                  />
                )
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
                return isFromTwitter(element.props['href']) ? (
                  <Tweet
                    key={element.props['href']}
                    tweetId={getTweetId(element.props['href'])}
                    options={{align: 'center'}}
                  />
                ) : (
                  <Bookmark
                    url={element.props['href']}
                    key={element.props['href']}
                  />
                )
              } else {
                return React.createElement(type.toString(), props, children as ReactNode)
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
