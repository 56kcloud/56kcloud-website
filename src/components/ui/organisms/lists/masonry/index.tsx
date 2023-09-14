import {ReactNode} from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export default function MasonryLayout({children}: {children: ReactNode}) {
  return (
    <div className='w-full'>
      <ResponsiveMasonry
        columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
      >
        <Masonry gutter='2.5rem'>
          {children}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}
