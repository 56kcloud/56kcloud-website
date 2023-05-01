import {AnimatePresence, motion} from 'framer-motion'
import {PostPreview} from '@/models/blog/blog-preview'
import {Tag} from '@/models/tag.model'
import {useEffect, useMemo, useState} from 'react'
import {useRouter} from 'next/router'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import Post from '@/components/molecules/post'
import PostCard from '@/components/molecules/card/post'
import TagsFilter from '@/components/molecules/tags-filter'
import slugify from 'slugify'

export type BaseCardListProps = {
  posts: Array<PostPreview>
  tags: Array<Tag>
}

export default function PostCardList({posts, tags}: BaseCardListProps) {
  const [openedPost, setOpenedPost] = useState(null)
  const router = useRouter()
  const queryTag = router.query.tag
  const [filteredPosts, setFilteredPosts] = useState([])
  // const filteredPosts = useMemo(() => posts
  //   .filter(post => queryTag ? post.properties.tags.multi_select.map(tag => tag.name.toLowerCase())
  //     .includes(queryTag?.toString()) : true), 
  // [router.isReady, queryTag])

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

  function closePreview() {
    const id =openedPost.post.id
    document.getElementById(id).style.zIndex = '50'
    setOpenedPost(null)
    setTimeout(() => {
      document.getElementById(id).style.zIndex = '0'
    }, 500)
  }

  return (
    <section className='section-padding'>
      <div
        className='mx-auto max-w-7xl'
      >
        <TagsFilter tags={tags}/>
        {/* <AnimatePresence> */}
        <div className='min-h-[1000px]'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{300: 1, 700: 2, 1000: 3}}
          >
            <Masonry gutter='2.5rem'>
              {filteredPosts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  setOpenedPost={setOpenedPost}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>
        {/* </AnimatePresence> */}
        {openedPost && 
          <AnimatePresence>
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center bg-gray-900/20 backdrop-blur-md'
              onClick={closePreview}>
              <Post {...openedPost}/>
            </motion.div>
          </AnimatePresence>
        }
      </div>
    </section>
  )
}
