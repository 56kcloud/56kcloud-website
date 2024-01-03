'use client'

import {Article} from '@/models/article.model'
import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import ArticleCard from '@/components/ui/molecules/cards/article'

export type BlogThreeColumnProps = {
  title: string
  subtitle: string
  articles: Array<Article>
}

export default function BlogThreeColumn(props: BlogThreeColumnProps) {
  const [filteredPosts, setFilteredPosts] = useState<Array<Article>>([])

  useEffect(() => {
    setFilteredPosts([])
    const filteredArticles = props.articles
    setTimeout(() => {
      setFilteredPosts(
        filteredArticles.sort(
          (a, b) => DateTime.fromISO(b.publishedOn).toMillis() - DateTime.fromISO(a.publishedOn).toMillis()
        )
      )
    }, 100)
  }, [])

  const articles = filteredPosts.map((article) => <ArticleCard key={article.slug} article={article} fixedHeight />)

  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='relative px-6 mx-auto max-w-7xl'>
        <div className='max-w-2xl mr-auto lg:max-w-3xl lg:mx-0'>
          <h2 className='text-2xl font-medium text-white sm:text-3xl'>{props.title}</h2>
          <p className='mt-2 text-[18px] leading-8 text-slate-400 font-light'>{props.subtitle}</p>
        </div>
        <div className='mt-16 sm:mt-10'>
          <div className='grid grid-cols-1 gap-6 gap-y-16 md:grid-cols-2 lg:grid-cols-3'>{articles}</div>
        </div>
      </div>
    </div>
  )
}
