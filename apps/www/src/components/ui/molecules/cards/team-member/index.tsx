import {TeamMember} from '@/models/team-member.model'
import {cn} from '@/utils/toolbox'
import Button from '@/components/ui/atoms/button'
import Image from 'next/image'
import Link from 'next/link'
import Linkedin from '@/components/ui/svgs/logos/linkedin'
import Mail from '@/components/ui/svgs/logos/mail'

export type TeamMemberCardProps = {
  teamMember: TeamMember
  cardWithPadding?: boolean
}

export default function TeamMemberCard({teamMember, cardWithPadding = true}: TeamMemberCardProps) {
  return (
    <div className='flex items-center justify-center'>
      <div className={cn(cardWithPadding ? 'px-8 mt-8' : '', 'w-full mx-auto max-w-7xl')}>
        <div
          className='border border-slate-800 rounded-3xl w-full flex flex-row bg-gradient-to-t \
          from-slate-800 to-slate-900 overflow-hidden relative min-[672px]:h-[502px] min-[800px]:h-[480px] min-[912px]:h-[456px] lg:h-[316px] min-[1152px]:h-[292px] min-[1264px]:h-[264px]'
        >
          <div
            className='absolute left-1/2 -translate-x-1/2 -translate-y-[17%] w-max lg:top-1/2 lg:left-0 transform \
            lg:-translate-y-[56%] lg:-translate-x-[10%]'
          >
            <Image
              src={teamMember.avatar.url}
              alt={teamMember.name}
              width={teamMember.avatar.width}
              height={teamMember.avatar.height}
              className='object-cover w-[368px] h-[368px] lg:w-64 lg:h-64'
            />
          </div>
          <div className='space-y-5 p-8 pt-56 z-50 lg:pl-52 flex flex-col justify-between lg:pt-8 lg:pr-7'>
            <div className='space-y-1'>
              <h3
                className='text-2xl leading-7 font-semibold text-center w-fit text-transparent bg-clip-text \
                bg-text-gradient-blue'
              >
                {teamMember.name}
              </h3>
              <p className='text-base leading-[26px] text-slate-400 font-light'>{teamMember.role?.name}</p>
            </div>
            <div className='h-full flex flex-col gap-5 min-[672px]:justify-between'>
              <p className='text-base leading-[26px] text-slate-50 font-light italic'>{`"${teamMember.bio}"`}</p>
              <div className='flex gap-x-6'>
                {teamMember.email && (
                  <Button
                    asChild
                    variant='link'
                    tone='secondary'
                    className='!pt-[3px]'
                  >
                    <Link href={`mailto:${teamMember.email}`}>
                      <Mail className='w-5 h-5 text-slate-400' />
                    </Link>
                  </Button>
                )}
                {teamMember.linkedin && (
                  <Button
                    asChild
                    variant='link'
                    tone='secondary'
                  >
                    <Link
                      href={`https://linkedin.com/in/${teamMember.linkedin}`}
                      target='_blank'
                    >
                      <Linkedin className='w-4 h-4 text-slate-400' />
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
