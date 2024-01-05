import {ImageProps} from '@/models/image.model'
import {Tag} from '@/models/tag.model'
import {TeamMember} from '@/models/team-member.model'
import {formatDate} from '@/utils/toolbox'
import ArticleCover from '../cover'
import Avatar from '@/components/ui/atoms/avatar'
import MarkdownViewer from '../../mardown'
import PostTagList from '../../tag-list'
import React, {Suspense} from 'react'

export type ArticleContentSectionProps = {
  image: ImageProps
  tags: Array<Tag>
  title: string
  content: string
  publishedOn: string
  author: TeamMember
}

export default function ArticleContentSection({
  image,
  tags,
  title,
  content,
  publishedOn,
  author
}: ArticleContentSectionProps) {
  content = `# ${title} \n ${content}`
  return (
    <div className='flex items-center justify-center pt-24 sm:pt-32'>
      <div className='w-full px-6 mx-auto max-w-7xl lg:px-8'>
        <div className='z-50 w-full h-full overflow-auto bg-white/5 max-w-7xl rounded-xl overscroll-contain'>
          <ArticleCover image={image} />
          <div className='w-full p-6 md:p-10'>
            <div className='flex flex-col-reverse justify-between md:items-center md:flex-row'>
              <Suspense>
                <PostTagList tags={tags} />
              </Suspense>
              <div
                className='flex flex-col items-center justify-center mb-10 overflow-hidden text-sm leading-6 \
                 text-gray-300 md:flex-row md:mb-0 gap-y-6'
              >
                <time
                  dateTime={publishedOn}
                  className='md:mr-8'
                >
                  {formatDate(publishedOn)}
                </time>
                <div className='flex items-center -ml-4 gap-x-4'>
                  <svg
                    viewBox='0 0 2 2'
                    className='-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50 hidden md:flex'
                  >
                    <circle
                      cx={1}
                      cy={1}
                      r={1}
                    />
                  </svg>
                  <div className='flex gap-x-2.5 items-center'>
                    <Avatar
                      size='sm'
                      image={author.avatar}
                    />
                    {author.name}
                  </div>
                </div>
              </div>
            </div>
            <div className='max-w-full'>
              <MarkdownViewer
                content={content}
                className='px-0'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
