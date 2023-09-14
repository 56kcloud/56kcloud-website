import {Article} from '@/models/article.model'
import {formatDate} from '@/utils/toolbox'
import {motion} from 'framer-motion'
import ArticleCover from '../cover'
import ArticleTagList from './tag-list'
import Avatar from '@/components/ui/atoms/avatar'
import Link from 'next/link'

type ArticleCardProps = {
  article: Article
}

export default function ArticleCard({article}: ArticleCardProps) {
  const publishedOn = formatDate(article.publishedOn)
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
    >
      <Link
        href={`/blog/${article.slug}`}
        className='relative flex flex-col overflow-hidden duration-200 bg-white rounded-lg shadow-lg cursor-pointer \
      hover:shadow-2xl hover:scale-105'>
        <ArticleCover image={article.cover}/>
        <div
          className='flex flex-col py-6 pl-6 bg-white'>
          <ArticleTagList tags={article.tags}/>
          <div className='pr-6'>
            <h1
              className='text-2xl line-clamp-2 text-grey-dark title'>
              {article.title}
            </h1>
            <p 
              className='mt-2 text-base text-grey-light line-clamp-3'>
              {article.description}
            </p>
            <div
              className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-light'>
              <Avatar
                image={article.author.avatar.src}
                alt={article.author.avatar.alt || 'author'}
              />
              <div className='flex flex-col'>
                <span>
                  by{' '}
                  <span className='font-normal text-grey-dark'>
                    {article.author.name}
                  </span>
                </span>
                <div className='flex gap-x-2'>
                  <span>{publishedOn}</span>
                  <span>|</span>
                  <span>{article.readTime} minute{article.readTime > 1 ? 's' : ''} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
