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
  fixedHeight?: boolean
}

export default function ArticleCard({article, fixedHeight}: ArticleCardProps) {
  const publishedOn = formatDate(article.publishedOn)
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      transition={{duration: 0.2}}
      className={cn(fixedHeight ? 'flex-1' : '')}
    >
      <Link
        href={`/blog/${article.slug}`}
        className={cn(
          'relative flex flex-col overflow-hidden cursor-pointer',
          fixedHeight ? 'h-[500px]' : ''
        )}
      >
        <ArticleCover
          image={article.image}
          fixedHeight={fixedHeight}
        />
        <div className='flex flex-col flex-1 mt-9'>
          <div className='flex items-center space-x-4'>
            <span className='text-sm font-light text-slate-400'>{publishedOn}</span>
            <div className='flex flex-1 h-10 overflow-x-auto'>
              <ArticleTagList tags={article.tags}/>
            </div>
          </div>
          <div>
            <h1
              className='mt-5 text-xl font-normal leading-6 text-white line-clamp-2 title'>
              {article.title}
            </h1>
            <p 
              className={cn(
                'mt-6 text-base font-light leading-[26px] text-slate-400 line-clamp-3',
                fixedHeight && 'h-20'
              )}>
              {article.description}
            </p>
          </div>
          <div
            className='flex flex-wrap items-center mt-8 text-sm gap-x-3 text-slate-400'>
            <Avatar
              image={article.author.avatar}
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
      </Link>
    </motion.div>
  )
}
