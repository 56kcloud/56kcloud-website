import {ReactNode} from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export type MasonryLayoutProps = {
  children: ReactNode
}

export default function MasonryLayout({children}: MasonryLayoutProps) {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}>
      <Masonry gutter='2.5rem'>{children}</Masonry>
    </ResponsiveMasonry>
  )
}
