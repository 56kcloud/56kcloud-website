import BlogCard from '../../components/molecules/blog-card'

export default function BlogCardsWrapper({posts}) {
  return (
    <section className='section-padding'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid grid-cols-3 gap-6'>
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
