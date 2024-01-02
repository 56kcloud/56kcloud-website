'use client'

import {cn} from '@/utils/toolbox'
import {useState} from 'react'
import Button from '../../atoms/button'
import Link from 'next/link'

export default function DraftModal() {
  const [isMinimized, setIsMinimized] = useState(false)

  return (
    <div
      className={cn(
        'fixed z-50 text-white border bg-slate-800/70 bottom-5 right-5 backdrop-blur-md border-slate-800 \
         overflow-hidden',
        isMinimized ? 'rounded-full hover:border-slate-600 hover:cursor-pointer' : 'rounded-lg'
      )}>
      {isMinimized 
        ? <div
          className='flex items-center justify-center w-10 h-10'
          onClick={() => setIsMinimized(false)}
        >
          🚧
        </div>
        : <div className='p-5 w-96'>
          <h2 className='pb-2 text-lg font-bold'>You are in draft mode</h2>
          <p className='text-sm'>Don&apos;t forget to publish the draft version before revalidating the website.</p>
          <div className='flex pt-6 space-x-4'>
            <Button
              size='small'
            >
              <Link href={'/api/draft/disable'}>
                Back to normal
              </Link>
            </Button>
            <Button
              tone='secondary'
              variant='link'
              size='small'
              onClick={() => setIsMinimized(true)}
            >
              Minimize me
            </Button>
          </div>
        </div>}
    </div>
  )
}
