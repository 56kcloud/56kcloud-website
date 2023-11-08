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
          'relative flex flex-col overflow-hidden duration-200 cursor-pointer hover:scale-105',
          sameHeight ? 'h-[500px]' : ''
        )}
      >
        <ArticleCover
          image={article.image}
          sameHeight={sameHeight}
        />
        <div className='flex flex-col mt-9'>
          <div className='flex items-center gap-x-4'>
            <span className='text-sm font-light text-slate-400'>{publishedOn}</span>
            <ArticleTagList tags={article.tags}/>
          </div>
          <div>
            <h1
              className='mt-5 text-xl font-normal leading-6 text-white line-clamp-2 title'>
              {article.title}
            </h1>
            <p 
              className='mt-6 text-base font-light leading-[26px] text-slate-400 line-clamp-3'>
              {article.description}
            </p>
            <div
              className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-slate-400'>
              <Avatar
                image={article.author.avatar.src}
                alt={article.author.avatar.alt || 'author'}
                size='md'
              />
              <div className='flex flex-col text-base'>
                <span className='font-normal text-white'>
                  {article.author.name}
                </span>
                <div className='flex font-light gap-x-2'>
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
