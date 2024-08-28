import {TeamMember} from '@/models/team-member.model'
import ComponentLayout from '@/components/ui/atoms/component-layout'
import Image from 'next/image'

export type TeamThreeColumnProps = {
  title: string
  subtitle: string
  teamMembers: TeamMember[]
}

export default function TeamThreeColumn(props: TeamThreeColumnProps) {
  return (
    <ComponentLayout>
      <div className='pb-20 pt-9 lg:pb-[104px] lg:pt-[120px]'>
        <div className='mr-auto space-y-4 max-w-4xl'>
          <h2
            className='w-fit text-[44px] leading-[48px] font-extrabold tracking-tight text-transparent bg-clip-text \
            bg-text-gradient-gray lg:leading-[58px]'
          >
            {props.title}
          </h2>
          <p className='text-base leading-7 text-slate-400 font-light'>{props.subtitle}</p>
        </div>
        <ul
          role='list'
          className='grid max-w-2xl grid-cols-1 mx-auto mt-10 gap-8 sm:gap-y-14 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none \
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
              <h3
                className='text-lg leading-6 font-semibold w-fit text-transparent bg-clip-text bg-text-gradient-blue \
                line-clamp-2 mt-6'
              >
                {teamMember.name}
              </h3>
              <p className='text-sm font-light leading-6 text-slate-400'>{teamMember.role?.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </ComponentLayout>
  )
}
