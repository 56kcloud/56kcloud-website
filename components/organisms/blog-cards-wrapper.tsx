import BlogCard, {BlogCardProps} from '../../components/molecules/blog-card'
import Filter from '../molecules/filter'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export type BlogCardsWrapperProps = {
  posts: Array<BlogCardProps>
}

export default function BlogCardsWrapper({posts}: BlogCardsWrapperProps) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <Filter />
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
        >
          <Masonry gutter='2rem'>
            {posts.map((post, idx) => (
              <BlogCard key={idx} post={post}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}
