import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import BlogPostCard from '@/components/ui/molecules/cards/blog-post'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import slugify from 'slugify'

export default function BlogPostList({posts}) {
  const router = useRouter()
  const queryTag = router.query.tag
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    setFilteredPosts([])
    if (router.isReady) {
      const filteredPosts = posts
        .filter(post => queryTag ? post.tags.map(tag => slugify(tag.name).toLowerCase())
          .includes(queryTag?.toString()) : true)
      setTimeout(() => {
        setFilteredPosts(filteredPosts.sort((a,b) => DateTime.fromISO(b.publishedOn).toMillis()
         - DateTime.fromISO(a.publishedOn).toMillis()))
      }, 100)
    }
  }, [router.isReady, queryTag])

  return (
    <section className='w-full'>
      <div className='min-h-[1000px]'>
        <ResponsiveMasonry
          columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
        >
          <Masonry gutter='2.5rem'>
            {filteredPosts.map((post, index) => (
              <BlogPostCard
                key={index}
                post={post}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </section>
  )
}
