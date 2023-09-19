import {TeamMemberCardProps} from '..'
import Avatar from '@/components/ui/atoms/avatar'
import Link from 'next/link'

export default function SmallTeamMemberCard({teamMember}: TeamMemberCardProps) {
  const name = teamMember.name.split(' ')
  return (
    <Link
      href={`about/team-members/${teamMember.slug}`}
      className='relative flex flex-col justify-between p-6 text-white duration-200 hover:scale-105 sm:mb-0 \
       bg-primary-500 h-96'>
      <p className='font-normal text-right'>{teamMember.role}</p>
      <div className='absolute bottom-0 left-0 w-full p-6'>
        <div className='my-[10%] w-full flex justify-center'>
          <Avatar
            size='xl'
            image={teamMember.avatar.src}
            alt={'postAvatarImageAlt'}
          />
        </div>
        <h3 className='text-[24px] title'>{name[0]}<br></br>{name[1] || ''}</h3>
      </div>
    </Link>
  )
}
