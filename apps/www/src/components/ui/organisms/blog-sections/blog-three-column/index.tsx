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
    <div className='py-24 bg-gray-900 sm:py-32'>
      <div className='px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='max-w-2xl mx-auto lg:mx-0'>
          <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-2 text-lg leading-8 text-gray-300'>
            {props.subtitle}
          </p>
        </div>
        <div
          className='max-w-2xl pt-10 mx-auto mt-10 border-t border-gray-700 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none'
        >
          {hasMoreThanOneRow
            ? <MasonryLayout>
              {articles}
            </MasonryLayout>
            : <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
              {articles}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
