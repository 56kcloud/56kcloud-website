import {NotionPostPreview} from '@/models/blog/blog-preview'
import {Tag} from '@/models/tag.model'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import PostCard from '@/components/molecules/card/post'
import TagsFilter from '@/components/molecules/tags-filter'
import slugify from 'slugify'

export type BaseCardListProps = {
  posts: Array<NotionPostPreview>
  tags?: Array<Tag>
}

export default function PostCardList({posts, tags}: BaseCardListProps) {
  const router = useRouter()
  const queryTag = router.query.tag
  const [filteredPosts, setFilteredPosts] = useState([])

  useEffect(() => {
    setFilteredPosts([])
    if (router.isReady) {
      const filteredPosts = posts
        .filter(post => queryTag ? post.properties.tags.multi_select.map(tag => slugify(tag.name).toLowerCase())
          .includes(queryTag?.toString()) : true)
      setTimeout(() => {
        setFilteredPosts(filteredPosts)
      }, 100)
    }
  }, [router.isReady, queryTag])

  return (
    <section className='section-padding'>
      <div
        className='mx-auto max-w-7xl'
      >
        {tags && <TagsFilter tags={tags}/>}
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
