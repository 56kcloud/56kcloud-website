import {faker} from '@faker-js/faker'
import {solutionFactory} from '@/tests/factories/solution.factory'
import SolutionOneColumn, {SolutionOneColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/SolutionSections/SolutionOneColumn',
  component: SolutionOneColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    solutions: Array.from({length: 4}, () => solutionFactory())
  }
} satisfies Meta<typeof SolutionOneColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: SolutionOneColumnProps) => <SolutionOneColumn {...args} />
}
