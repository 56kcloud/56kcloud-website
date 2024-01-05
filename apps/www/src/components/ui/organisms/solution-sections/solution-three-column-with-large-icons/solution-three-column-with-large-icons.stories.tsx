import {faker} from '@faker-js/faker'
import {solutionFactory} from '@/tests/factories/solution.factory'
import SolutionThreeColumnWithLargeIcons, {SolutionThreeColumnWithLargeIconsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/SolutionSections/SolutionThreeColumnWithLargeIcons',
  component: SolutionThreeColumnWithLargeIcons,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    solutions: Array.from({length: 3}, () => solutionFactory())
  }
} satisfies Meta<typeof SolutionThreeColumnWithLargeIcons>

export default meta

export const Default = {
  name: 'Default',
  render: (args: SolutionThreeColumnWithLargeIconsProps) => <SolutionThreeColumnWithLargeIcons {...args} />
}
