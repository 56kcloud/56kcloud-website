import {LinkIcon} from '@heroicons/react/outline'
import {NotionPostAuthor} from '@/models/blog/blog-preview'
import {Twitter} from '@/components/svgs/logos/twitter'
import Avatar from '@/components/atoms/avatar'
import Button from '@/components/atoms/button'
import Link from 'next/link'

export type AuthorCardProps = {
  author: NotionPostAuthor
}


export default function AuthorCard({author}: AuthorCardProps) {
  const avatarImage = author.properties.profileImage.files[0].file.url
  const name = author.properties.name.title[0].plain_text
  const bio = author.properties.bio.rich_text[0].plain_text
  const twitter = author.properties.twitter.rich_text[0].plain_text
  const website = author.properties.website.url
  return (
    <div className='flex w-full p-10 space-x-4 bg-white shadow-lg sm:space-x-8 rounded-xl'>
      <div>
        <Avatar
          size='lg'
          image={avatarImage}
          alt={'postAvatarImageAlt'}/>
      </div>
      <div className='space-y-2'>
        <h1 className='text-2xl title line-clamp-2'>
          {name}
        </h1>
        <p className='max-w-2xl mt-2 text-base text-grey-light line-clamp-3'>{bio}</p>
        <div className='flex'>
          {twitter && 
            <Button
              target='_blank'
              variant='link'
              as={Link}
              href={`https://twitter.com/${twitter}`}>
              <Twitter className='w-4 h-4'/>
            </Button>
          }
          {website &&
            <Button
              target='_blank'
              variant='link'
              as={Link}
              href={website}>
              <LinkIcon className='w-4 h-4'/>
            </Button>
          }
        </div>
      </div>
    </div>
  )
}
