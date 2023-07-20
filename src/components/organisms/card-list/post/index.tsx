// import {NotionPostPreview} from '@/models/blog/blog-preview'
// import {Tag} from '@/models/tag.model'
import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import PostCard from '@/components/molecules/card/post'
import slugify from 'slugify'

export default function PostCardList({posts}) {
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
    <section>
      <div
        className='mx-auto max-w-7xl'
      >
        <div className='min-h-[1000px]'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
          >
            <Masonry gutter='2.5rem'>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
      </div>
    </section>
  )
}
