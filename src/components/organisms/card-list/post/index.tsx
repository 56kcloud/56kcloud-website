import {AnimatePresence, motion} from 'framer-motion'
import {NotionPost, NotionPostPreview} from '@/models/blog/blog-preview'
import {Tag} from '@/models/tag.model'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Button from '@/components/atoms/button'
import Image from 'next/image'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import PostCard from '@/components/molecules/card/post'
import PostDetail from '@/components/molecules/post'
import TagsFilter from '@/components/molecules/tags-filter'
import plusWhite from '../../../../../public/images/icons/plus-white.webp'
import slugify from 'slugify'

export type BaseCardListProps = {
  posts: Array<NotionPostPreview>
  tags: Array<Tag>
}

export default function PostCardList({posts, tags}: BaseCardListProps) {
  const [openedPost, setOpenedPost] = useState<NotionPost>(null)
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

  function closePreview() {
    const id =openedPost.post.id
    document.getElementById(id).style.zIndex = '50'
    setOpenedPost(null)
    setTimeout(() => {
      document.getElementById(id).style.zIndex = '0'
    }, 500)
  }

  function closeOnEsc(e) {
    if (e.key === 'Escape') {
      closePreview()
    }
  }

  useEffect(() => {
    if (openedPost) {
      const slug = openedPost.post.properties.slug.rich_text[0].plain_text
      window.history.pushState(slug, slug, `/blog/${slug}`)
      window.addEventListener('keydown', closeOnEsc)
      return () => {
        window.removeEventListener('keydown', closeOnEsc)
      }
    } else {
      window.history.pushState('blog', 'blog', router.asPath)
    }
  }, [openedPost])

  return (
    <section className='section-padding'>
      <div
        className='mx-auto max-w-7xl'
      >
        <TagsFilter tags={tags}/>
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
        {openedPost && 
          <AnimatePresence>
            <motion.div
              className='fixed inset-0 z-50 flex items-center justify-center p-10 bg-gray-900/20 backdrop-blur-md'
              onClick={closePreview}
            >
              <motion.div
                layout
                className='relative h-[90%]'>
                <motion.div 
                  layout
                  initial={{opacity: 0}}
                  animate={{opacity: 1}}
                  transition={{
                    duration: 0.5
                  }}
                  className='absolute z-50 -right-5 -top-5'
                >
                  <Button
                    unstyled={true}
                    className='z-50 rounded-full focus:outline-primary-900 focus:outline-offset-2 hover:opacity-90'
                  >
                    <Image
                      src={plusWhite}
                      alt={'altButton'}
                      className='w-12 sm:w-14'/>
                  </Button>
                </motion.div>
                <PostDetail
                  {...openedPost}
                  animateCover/>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        }
      </div>
    </section>
  )
}
