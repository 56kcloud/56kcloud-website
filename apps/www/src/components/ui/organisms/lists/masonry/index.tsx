import {ReactNode} from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export default function MasonryLayout({children}: {children: ReactNode}) {
  return (
    <div className='flex items-center justify-center w-full'>
      <div className='w-full px-4 py-10 max-w-7xl'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
        >
          <Masonry gutter='2.5rem'>
            {children}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}
