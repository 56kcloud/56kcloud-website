import {Tag} from '@/models/tag.model'
import {useRouter} from 'next/router'
import Badge from '@/components/atoms/badge'
import Link from 'next/link'
import slugify from 'slugify'

export type BlogTagListProps = {
  tags: Array<Tag>
}

export default function PostTagList({tags}: BlogTagListProps) {
  const queryTag = useRouter().query.tag
  const sortedTags = tags?.sort((a,b) => 
    slugify(a.name).toLowerCase() === queryTag ? -1 : slugify(b.name).toLowerCase() === queryTag ? 1 : 0)

  return (
    <div
      className='flex p-1 mb-5 space-x-2 overflow-x-scroll'>
      {sortedTags?.map((tag, idx: number) => (
        <Link
          key={idx}
          href={`/blog?tag=${slugify(tag.name).toLowerCase()}`}
        >
          <Badge
            key={idx}
            color={tag.color}
            className={queryTag ? slugify(tag.name).toLowerCase() === queryTag ? '' : 'opacity-30' : ''}
          >
            {tag.name}
          </Badge>
        </Link>
      ))}
    </div>
  )
}
