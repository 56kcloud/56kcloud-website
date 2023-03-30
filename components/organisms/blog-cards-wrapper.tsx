import BlogCard, {BlogCardProps} from '../../components/molecules/blog-card'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'

export type BlogCardsWrapperProps = {
  posts: Array<BlogCardProps>
}

export default function BlogCardsWrapper({posts}: BlogCardsWrapperProps) {

  const postsSorted = posts.sort((a, b) => {
    return new Date(b['properties'].published_at.date.start).valueOf() -
    new Date(a['properties'].published_at.date.start).valueOf()
  })

  console.log(postsSorted)

  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
        >
          <Masonry gutter='1rem'>
            {postsSorted.map((post, idx) => (
              <BlogCard key={idx} post={post}/>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}
