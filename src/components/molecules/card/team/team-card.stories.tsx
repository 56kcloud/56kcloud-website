import TeamCard from './index'
import darragh from '../../../../../public/images/team/darragh.webp'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Card/Team',
  component: TeamCard,
  tags: ['autodocs'],
  args: {
    firstName: 'John',
    lastName: 'Doe',
    role: 'Lorem ipsum',
    image: darragh
  }
} satisfies Meta<typeof TeamCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <TeamCard {...args}/>
}
