import {TeamMember} from '@/models/team-member.model'
import Image from 'next/image'

export type TeamThreeColumnProps = {
  title: string
  subtitle: string
  teamMembers: TeamMember[]
}

export default function TeamThreeColumn(props: TeamThreeColumnProps) {
  return (
    <div className='px-6 mx-auto mt-32 max-w-7xl sm:mt-40 lg:px-8'>
      <div className='max-w-2xl mx-auto lg:mx-0'>
        <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>{props.title}</h2>
        <p className='mt-6 text-lg leading-8 text-gray-300'>
          {props.subtitle}
        </p>
      </div>
      <ul
        role='list'
        className='grid max-w-2xl grid-cols-1 mx-auto mt-20 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none \
                   lg:grid-cols-3 xl:grid-cols-4'
      >
        {props.teamMembers.map((teamMember) => (
          <li key={teamMember.name}>
            <Image
              src={teamMember.avatar.url}
              width={teamMember.avatar.width}
              height={teamMember.avatar.height}
              placeholder='blur'
              blurDataURL={teamMember.avatar.placeholder}
              alt={teamMember.name}
              className='aspect-[14/13] w-full rounded-2xl object-cover'
            />
            <h3 className='mt-6 text-lg font-semibold leading-8 tracking-tight text-white'>{teamMember.name}</h3>
            <p className='text-base leading-7 text-gray-300'>{teamMember.role}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
