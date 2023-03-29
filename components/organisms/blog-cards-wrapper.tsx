import BlogCard from '../../components/molecules/blog-card'

export default function BlogCardsWrapper({posts}) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='space-y-6 gap-x-6 sm:columns-2 lg:columns-3'>
          {posts.map((post) => (
            <div key={post.id}>
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
