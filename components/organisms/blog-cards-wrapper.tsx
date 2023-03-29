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
        <div className='space-y-8 gap-x-8 sm:columns-2 lg:columns-3'>
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
