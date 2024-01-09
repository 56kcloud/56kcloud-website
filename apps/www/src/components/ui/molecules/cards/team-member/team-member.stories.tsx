import {teamMemberFactory} from '@/tests/factories/team-member.factory'
import TeamMemberCard, {TeamMemberCardProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/TeamMember',
  component: TeamMemberCard,
  tags: ['autodocs'],
  args: {
    teamMember: teamMemberFactory()
  }
} satisfies Meta<typeof TeamMemberCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TeamMemberCardProps) => <TeamMemberCard {...args} />
}
