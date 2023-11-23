'use client'

import {useEffect, useState} from 'react'

type BookmarkProps = {
  url: string
}

type OgResponse = {
  ogTitle?: string
  ogDescription?: string
  ogUrl?: string
  ogImage?: Array<{url: string}>
  favicon?: string
}

export function Bookmark({url}: BookmarkProps) {
  const [bookmark, setBookmark] = useState<OgResponse>()
  const [isValid, setIsValid] = useState<boolean>(true)

  useEffect(() => {
    fetch(`/api/og/?url=${encodeURI(url)}`).then(res => res.json()).then(data => {
      setBookmark(data)
    }).catch(() => {
      setIsValid(false)
    })
  }, [])

  return isValid 
    ? <a
      target='_blank'
      href={url}
      className='items-center space-x-2 overflow-hidden not-prose h-[160px] border hover:bg-white/10 cursor-pointer \
               inline-grid w-full border-gray-700 rounded-md'>
      {!bookmark
        ? <div className='flex w-full h-full animate-pulse'>
          <div className='flex flex-col justify-center flex-1 w-full h-full p-5 space-y-2'>
            <div className='w-full h-8 bg-gray-100 rounded-md md:w-96'></div>
            <div className='w-full h-10 bg-gray-100 rounded-md'></div>
            <div className='w-full h-5 bg-gray-100 rounded-md md:w-96'></div>
          </div>
          <div className='relative hidden w-full max-w-sm bg-gray-100 border-l md:block'>
          </div>
        </div>
        : <div className='flex items-center h-full'>
          <div className='flex items-center flex-1 h-full'>
            <div className='p-5'>
              {bookmark.ogTitle && <p className='text-lg font-bold line-clamp-1'>{bookmark.ogTitle}</p>}
              {bookmark.ogDescription && <p className='text-sm font-normal line-clamp-3'>{bookmark.ogDescription}</p>}
              <div className='flex items-center mt-1 space-x-2'>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                {bookmark.favicon && <img
                  alt={bookmark.ogTitle}
                  src={bookmark.favicon}
                  className='w-5 h-5'></img>}
                {url && <p className='text-xs text-gray-500 truncate w-44 md:w-96'>{url}</p>}
              </div>
            </div>
          </div>
          {bookmark.ogImage 
            ? bookmark.ogImage[0]?.url 
              ? <div
                className='relative hidden w-full h-[160px] max-w-sm overflow-hidden border-l md:flex border-gray-700'
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt={bookmark.ogTitle}
                  className='object-cover w-full'
                  src={bookmark.ogImage[0].url}
                />
              </div>
              : null
            : null
          }
        </div>
      }
    </a>
    : <a
      href={url}
      target='_blank'
      className='text-sm text-gray-500 underline'>
      {url}
    </a>
}
