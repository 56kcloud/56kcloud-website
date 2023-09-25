import {Link2, Twitter} from 'lucide-react'
import {TeamMemberCardProps} from '@/components/ui/molecules/cards/team-member'
import Avatar from '@/components/ui/atoms/avatar'
import Button from '@/components/ui/atoms/button'
import Link from 'next/link'

export default function TeamMemberHero({teamMember}: TeamMemberCardProps) {
  return (
    <div className='flex flex-col items-center justify-between space-y-5'>
      <Avatar
        size='xl'
        image={teamMember.avatar.src}
        alt={'postAvatarImageAlt'}
      />
      <p className='font-normal text-right'>{teamMember.role}</p>
      <h3 className='responsive-title title'>{teamMember.name}</h3>
      <p className='max-w-4xl text-center'>{teamMember.bio}</p>
      <div className='flex space-x-2'>
        {teamMember.twitter &&
          <Button
            asChild
            variant='link'
          >
            <Link href={`https://twitter.com/${teamMember.twitter}`}>
              <Twitter className='w-5 h-5'/>
            </Link>
          </Button>
        }
        {teamMember.website &&
          <Button
            asChild
            variant='link'
          >
            <Link href={teamMember.website}>
              <Link2 className='w-5 h-5'/>
            </Link>
          </Button>
        }
      </div>
    </div>
  )
}
