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
  usedLanguage: string
}

export default function TeamMemberCard({teamMember, cardWithPadding = true, usedLanguage}: TeamMemberCardProps) {
  return (
    <div className='flex items-center justify-center'>
      <div className={cn(cardWithPadding ? 'px-8 mt-8' : '', 'w-full mx-auto max-w-7xl')}>
        <div
          className={cn(
            usedLanguage === 'fr'
              ? 'sm:h-[644px] min-[768px]:h-[568px] min-[896px]:h-[512px] lg:h-[424px] min-[1152px]:h-[342px] xl:h-[312px]'
              : 'sm:h-[544px] min-[768px]:h-[492px] min-[896px]:h-[464px] lg:h-[324px] min-[1152px]:h-[292px] xl:h-[274px]',
            'relative h-full border border-slate-800 rounded-3xl w-full flex flex-row bg-gradient-to-t \
            from-slate-800 to-slate-900 overflow-hidden'
          )}
        >
          <div
            className='absolute left-1/2 -translate-x-1/2 -translate-y-[17%] w-max lg:top-1/2 lg:left-0 transform \
            lg:-translate-y-[55%] lg:-translate-x-[10%]'
          >
            <Image
              src={teamMember.avatar.url}
              alt={teamMember.name}
              width={teamMember.avatar.width}
              height={teamMember.avatar.height}
              className='object-cover w-[368px] h-[368px] lg:w-64 lg:h-64'
            />
          </div>
          <div className='flex flex-col justify-between h-full gap-y-5 p-6 pt-56 z-50 sm:p-8 lg:pl-52 lg:pt-8'>
            <div className='space-y-1'>
              <h3 className='text-2xl leading-7 font-semibold w-fit text-transparent bg-clip-text bg-text-gradient-blue'>
                {teamMember.name}
              </h3>
              <p className='text-base leading-[26px] text-slate-400 font-light'>{teamMember.role?.name}</p>
            </div>
            <div className='flex-grow flex flex-col justify-between gap-y-6 sm:gap-y-0'>
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
