import {faker} from '@faker-js/faker'
import {solutionFactory} from '@/tests/factories/solution.factory'
import SolutionThreeColumnsWithImage, {SolutionThreeColumnsWithImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/SolutionSections/SolutionThreeColumnsWithImage',
  component: SolutionThreeColumnsWithImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    solutions: Array.from({length: 3}, () => solutionFactory())
  }
} satisfies Meta<typeof SolutionThreeColumnsWithImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: SolutionThreeColumnsWithImageProps) => <SolutionThreeColumnsWithImage {...args} />
}
