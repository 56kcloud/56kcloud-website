import {TeamMember} from '@/models/team-member'
import Button from '@/components/ui/atoms/button'
import SmallTeamMemberCard from '@/components/ui/molecules/cards/team-member/small'

export type TeamListProps = {
  teamMembers: Array<TeamMember>,
  joinTeamTitle: string,
  joinTeamTextStart: string
  joinTeamCTATitle: string
  joinTeamTextEnd: string
}

export default function TeamList(props: TeamListProps) {

  return (
    <section className='section-padding bg-primary-900 -mt-[1px]'>
      <div
        className='sm:grid grid-cols-1 sm:gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 \
        max-w-7xl'>
        {props.teamMembers.map((teamMember, index) => (
          <SmallTeamMemberCard
            key={index}
            teamMember={teamMember}
          />
        ))}
        <div className='flex flex-col items-center justify-center col-start-2 col-end-3 p-8 text-center text-white'>
          <h2 className='mb-6 text-[36px] md:text-[48px] title'>{props.joinTeamTitle}</h2>
          <p className='block text-lg text-center'>
            <span>{props.joinTeamTextStart}</span>
            <Button
              tone='secondary'
              variant='link'
              className='inline-block py-0 !px-0 text-lg hover:bg-transparent'
            >
              {props.joinTeamCTATitle}
            </Button>
            <span>{props.joinTeamTextEnd}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
