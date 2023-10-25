import {Article} from '@/models/article.model'
import {cn, formatDate} from '@/utils/toolbox'
import {motion} from 'framer-motion'
import ArticleCover from '../cover'
import ArticleTagList from './tag-list'
import Avatar from '@/components/ui/atoms/avatar'
import Link from 'next/link'

type ArticleCardProps = {
  article: Article
  className?: string
  sameHeight?: boolean
}

export default function ArticleCard({article, sameHeight}: ArticleCardProps) {
  const publishedOn = formatDate(article.publishedOn)
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
      className={cn(sameHeight ? 'flex-1' : '')}
    >
      <Link
        href={`/blog/${article.slug}`}
        className={cn(
          'relative flex flex-col overflow-hidden duration-200 bg-white/5 rounded-lg shadow-lg cursor-pointer \
           hover:shadow-2xl hover:scale-105',
          sameHeight ? 'h-[500px]' : ''
        )}
      >
        <ArticleCover
          image={article.image}
          sameHeight={sameHeight}
        />
        <div
          className='flex flex-col py-6 pl-6'>
          <ArticleTagList tags={article.tags}/>
          <div className='pr-6'>
            <h1
              className='text-2xl text-white line-clamp-2 title'>
              {article.title}
            </h1>
            <p 
              className='mt-2 text-base text-grey-300 line-clamp-3'>
              {article.description}
            </p>
            <div
              className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-grey-300'>
              <Avatar
                image={article.author.avatar.src}
                alt={article.author.avatar.alt || 'author'}
              />
              <div className='flex flex-col'>
                <span>
                  by{' '}
                  <span className='font-normal text-white'>
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
