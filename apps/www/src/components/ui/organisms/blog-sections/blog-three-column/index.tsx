import {Article} from '@/models/article.model'
import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import ArticleCard from '@/components/ui/molecules/cards/article'
import MasonryLayout from '@/components/ui/molecules/masonry'
import slugify from 'slugify'

export type BlogThreeColumnProps = {
  title: string
  subtitle: string
  articles: Array<Article>
}

export default function BlogThreeColumn(props: BlogThreeColumnProps) {
  const length = props.articles.length
  const hasMoreThanOneRow = length > 3
  const router = useRouter()
  const queryTag = router.query.tag
  const [filteredPosts, setFilteredPosts] = useState<Array<Article>>([])

  useEffect(() => {
    setFilteredPosts([])
    if (router.isReady) {
      const filteredArticles = props.articles
        .filter(article => queryTag ? article.tags.map(tag => slugify(tag.name).toLowerCase())
          .includes(queryTag?.toString()) : true)
      setTimeout(() => {
        setFilteredPosts(filteredArticles.sort((a,b) => DateTime.fromISO(b.publishedOn).toMillis()
         - DateTime.fromISO(a.publishedOn).toMillis()))
      }, 100)
    }
  }, [router.isReady, queryTag])

  const articles = filteredPosts.map((article) => (
    <ArticleCard
      key={article.slug}
      article={article}
      className={hasMoreThanOneRow ? '' : 'flex-1'}
      sameHeight={!hasMoreThanOneRow}
    />
  ))
  
  return (
    <div className='py-20 sm:py-[104px]'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mr-auto'>
          <h2 className='text-3xl font-medium text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-2 text-[20px] leading-8 text-slate-400 font-light'>
            {props.subtitle}
          </p>
        </div>
        <div
          className='mt-10 sm:mt-16'
        >
          {hasMoreThanOneRow
            ? <MasonryLayout>
              {articles}
            </MasonryLayout>
            : <div className='grid grid-cols-1 gap-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3'>
              {articles}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
