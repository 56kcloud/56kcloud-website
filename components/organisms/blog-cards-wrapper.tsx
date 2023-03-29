import BlogCard, {BlogCardProps} from '../../components/molecules/blog-card'

export type BlogCardsWrapperProps = {
  posts: Array<BlogCardProps>
}

export default function BlogCardsWrapper({posts}: BlogCardsWrapperProps) {
  const postsSorted = posts.sort((a, b) => {
    return new Date(b['properties'].published_at.date.start).valueOf() -
    new Date(a['properties'].published_at.date.start).valueOf()
  })

  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
          {postsSorted.map((post, idx) => (
            <div key={idx}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
