import Markdown from 'markdown-to-jsx'
import React from 'react'

export function MarkdownViewer({content}: {content: string}) {
  return (
    <div className='flex justify-center w-full'>
      <div className='w-full px-4 prose max-w-7xl'>
        <Markdown
          options={{
            createElement(type, props: React.HTMLProps<HTMLDivElement> , children: React.ReactNode) {
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
  )
}
