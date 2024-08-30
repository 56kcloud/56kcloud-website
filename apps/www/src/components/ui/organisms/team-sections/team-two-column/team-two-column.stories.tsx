import {faker} from '@faker-js/faker'
import {teamMemberFactory} from '@/tests/factories/team-member.factory'
import TeamTwoColumn, {TeamTwoColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/TeamSections/TeamTwoColumn',
  component: TeamTwoColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    teamMembers: Array.from({length: 6}, () => teamMemberFactory())
  }
} satisfies Meta<typeof TeamTwoColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TeamTwoColumnProps) => <TeamTwoColumn {...args} />
}
