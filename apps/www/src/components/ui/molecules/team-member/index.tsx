import {Link2} from 'lucide-react'
import {TeamMember} from '@/models/team-member.model'
import {X} from '../../svgs/logos/x'
import Avatar from '@/components/ui/atoms/avatar'
import Button from '@/components/ui/atoms/button'
import Link from 'next/link'

export type TeamMemberCardProps = {
  teamMember: TeamMember
}

export default function TeamMemberCard({teamMember}: TeamMemberCardProps) {
  return (
    <div className='flex items-center justify-center py-14 sm:py-14'>
      <div className='w-full px-6 mx-auto max-w-7xl lg:px-8'>
        <div
          className='flex flex-col items-center w-full p-10 space-x-0 shadow-lg md:flex-row bg-white/5 sm:space-x-8 \
           rounded-xl md:items-start space-y-4 md:space-y-0'
        >
          <div>
            <Avatar
              size='lg'
              image={teamMember.avatar}
            />
          </div>
          <div className='space-y-2'>
            <h1 className='text-2xl font-semibold text-white title line-clamp-2'>{teamMember.name}</h1>
            <p className='max-w-2xl mt-2 text-base text-white/90'>{teamMember.role?.name}</p>
            <div className='flex space-x-4'>
              {teamMember.twitter && (
                <Button
                  asChild
                  variant='link'
                  tone='secondary'
                >
                  <Link href={`https://twitter.com/${teamMember.twitter}`}>
                    <X className='w-4 h-4' />
                  </Link>
                </Button>
              )}
              {teamMember.website && (
                <Button
                  asChild
                  variant='link'
                  tone='secondary'
                >
                  <Link href={teamMember.website}>
                    <Link2 className='w-5 h-5' />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
