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

  useEffect(() => {
    fetch(`/api/og/?url=${encodeURI(url)}`).then(res => res.json()).then(data => {
      setBookmark(JSON.parse(data))
    })
  }, [])

  return <a
    target='_blank'
    href={url}
    className='items-center space-x-2 overflow-hidden not-prose h-[160px] border hover:bg-white/10 cursor-pointer \
               inline-grid w-full border-gray-700 rounded-md'>
    {!bookmark
      ? <span className='flex w-full h-full animate-pulse'>
        <span className='flex flex-col justify-center flex-1 w-full h-full p-5 space-y-2'>
          <span className='h-8 bg-gray-100 rounded-md w-96'></span>
          <span className='w-full h-10 bg-gray-100 rounded-md'></span>
          <span className='h-5 bg-gray-100 rounded-md w-96'></span>
        </span>
        <span className='relative hidden w-full max-w-sm bg-gray-100 border-l md:block'>
        </span>
      </span>
      : <span className='flex items-center h-full'>
        <span className='flex items-center flex-1 h-full'>
          <span className='p-5'>
            {bookmark.ogTitle && <p className='font-bold'>{bookmark.ogTitle}</p>}
            {bookmark.ogDescription && <p>{bookmark.ogDescription}</p>}
            <span className='flex items-center mt-1 space-x-2'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {bookmark.favicon && <img
                alt={bookmark.ogTitle}
                src={bookmark.favicon}
                className='w-5 h-5'></img>}
              {bookmark.ogUrl && <p className='text-xs text-gray-500 truncate w-96'>{bookmark.ogUrl}</p>}
            </span>
          </span>
        </span>
        {bookmark.ogImage 
          ? bookmark.ogImage[0]?.url 
            ? <span
              className='relative hidden w-full h-[160px] max-w-sm overflow-hidden border-l md:flex border-gray-700'
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt={bookmark.ogTitle}
                className='object-cover w-full'
                src={bookmark.ogImage[0].url}
              />
            </span>
            : null
          : null
        }
      </span>
    }
  </a>
}
