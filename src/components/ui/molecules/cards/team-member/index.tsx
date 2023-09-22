import {Link2} from 'lucide-react'
import {TeamMember} from '@/models/team-member'
import {Twitter} from '@/components/ui/svgs/logos/twitter'
import Avatar from '@/components/ui/atoms/avatar'
import Button from '@/components/ui/atoms/button'
import Link from 'next/link'

export type TeamMemberCardProps = {
  teamMember: TeamMember
}

export default function TeamMemberCard({teamMember}: TeamMemberCardProps) {
  return (
    <Link
      href={`/about/team-members/${teamMember.slug}`}
      className='flex w-full p-10 space-x-4 bg-white shadow-lg sm:space-x-8 rounded-xl hover:bg-gray-50'>
      <div>
        <Avatar
          size='lg'
          image={teamMember.avatar.src}
          alt={'postAvatarImageAlt'}
        />
      </div>
      <div className='space-y-2'>
        <h1 className='text-2xl title line-clamp-2'>
          {teamMember.name}
        </h1>
        <p className='max-w-2xl mt-2 text-base text-grey-light line-clamp-3'>
          {teamMember.bio}
        </p>
        <div className='flex space-x-2'>
          {teamMember.twitter &&
            <Button
              asChild
              variant='link'
            >
              <Link href={`https://twitter.com/${teamMember.twitter}`}>
                <Twitter className='w-4 h-4'/>
              </Link>
            </Button>
          }
          {teamMember.website &&
            <Button
              asChild
              variant='link'
            >
              <Link href={teamMember.website}>
                <Link2 className='w-4 h-4'/>
              </Link>
            </Button>
          }
        </div>
      </div>
    </Link>
  )
}
