'use client'

import {Article} from '@/models/article.model'
import {DateTime} from 'luxon'
import {useEffect, useState} from 'react'
import {useSearchParams} from 'next/navigation'
import ArticleCard from '@/components/ui/molecules/cards/article'
import MasonryLayout from '@/components/ui/molecules/masonry'
import slugify from 'slugify'

export type BlogMasonryProps = {
  title: string
  subtitle: string
  articles: Array<Article>
}

export default function BlogMasonry(props: BlogMasonryProps) {
  const searchParams = useSearchParams()
  const queryTag = searchParams.get('tag')
  const [filteredPosts, setFilteredPosts] = useState<Array<Article>>([])

  useEffect(() => {
    setFilteredPosts([])
    const filteredArticles = props.articles.filter((article) =>
      queryTag ? article.tags.map((tag) => slugify(tag.name).toLowerCase()).includes(queryTag?.toString()) : true
    )
    setTimeout(() => {
      setFilteredPosts(
        filteredArticles.sort(
          (a, b) => DateTime.fromISO(b.publishedOn).toMillis() - DateTime.fromISO(a.publishedOn).toMillis()
        )
      )
    }, 100)
  }, [queryTag])

  const articles = filteredPosts.map((article) => (
    <ArticleCard key={article.slug} article={article} className='flex-1' />
  ))

  return (
    <div className='py-20 lg:py-[104px]'>
      <div className='px-6 pt-32 mx-auto max-w-7xl lg:pt-44'>
        <div className='max-w-2xl mr-auto lg:max-w-3xl lg:mx-0'>
          <h2 className='text-3xl font-medium text-white sm:text-4xl'>{props.title}</h2>
          <p className='mt-8 text-[20px] leading-8 text-slate-400 font-light'>{props.subtitle}</p>
        </div>
        <div className='mt-10 sm:mt-16'>
          <MasonryLayout>{articles}</MasonryLayout>
        </div>
      </div>
    </div>
  )
}
