import {Tag} from '@/models/tag.model'
import {motion} from 'framer-motion'
import {useRouter} from 'next/router'
import Badge from '@/components/atoms/badge'
import slugify from 'slugify'

export type BlogTagListProps = {
  postId: string
  tags: Array<Tag>
}

export default function PostTagList({postId, tags}: BlogTagListProps) {
  const queryTag = useRouter().query.tag
  const sortedTags = tags.sort((a,b) => 
    slugify(a.name).toLowerCase() === queryTag ? -1 : slugify(b.name).toLowerCase() === queryTag ? 1 : 0)

  return (
    <motion.div
      layout
      layoutId={`tag-list-${postId}`}
      className='flex p-1 mb-5 space-x-2 overflow-x-scroll'>
      {sortedTags.map((tag, idx: number) => (
        <Badge
          key={idx}
          color={tag.color}
          className={queryTag ? slugify(tag.name).toLowerCase() === queryTag ? '' : 'opacity-30' : ''}
        >
          {tag.name}
        </Badge>
      ))}
    </motion.div>
  )
}
