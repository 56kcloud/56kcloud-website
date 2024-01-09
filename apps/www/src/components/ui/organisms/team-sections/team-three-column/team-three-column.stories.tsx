import {faker} from '@faker-js/faker'
import {teamMemberFactory} from '@/tests/factories/team-member.factory'
import TeamThreeColumn, {TeamThreeColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/TeamSections/TeamThreeColumn',
  component: TeamThreeColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    teamMembers: Array.from({length: 6}, () => teamMemberFactory())
  }
} satisfies Meta<typeof TeamThreeColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TeamThreeColumnProps) => <TeamThreeColumn {...args} />
}
