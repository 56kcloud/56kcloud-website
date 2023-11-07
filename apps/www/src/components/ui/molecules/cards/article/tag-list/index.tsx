import {Tag} from '@/models/tag.model'
import {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import Badge from '@/components/ui/atoms/badge'
import Link from 'next/link'
import slugify from 'slugify'

export type ArticleListProps = {
  tags: Array<Tag>
}

export default function ArticleTagList({tags}: ArticleListProps) {
  const queryTag = useRouter().query.tag
  const [sortedTags, setSortedTags] = useState<Array<Tag>>([])

  useEffect(() => {
    setSortedTags(tags 
      ? tags.sort((a,b) => 
        slugify(a.name).toLowerCase() === queryTag ? -1 : slugify(b.name).toLowerCase() === queryTag ? 1 : 0)
      : []
    )
  }, [tags])


  return (
    <div className='flex space-x-2 overflow-x-auto'>
      {sortedTags?.map((tag) => {
        const tagName = slugify(tag.name).toLowerCase()
        const href = queryTag === tagName ? '/blog' : `/blog?tag=${tagName}`
        return (
          <Link
            key={tag.name}
            href={href}
          >
            <Badge className={queryTag ? slugify(tag.name).toLowerCase() === queryTag ? '' : 'opacity-30' : ''}>
              {tag.name}
            </Badge>
          </Link>
        )
      })}
    </div>
  )
}