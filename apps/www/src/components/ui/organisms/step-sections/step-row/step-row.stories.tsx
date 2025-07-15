import {faker} from '@faker-js/faker'
import StepRow, {StepRowProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/StepSections/StepRow',
  component: StepRow,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    steps: Array.from({length: 4}, () => ({
      title: faker.lorem.sentence(),
      number: faker.number.int(4).toString()
    }))
  }
} satisfies Meta<typeof StepRow>

export default meta

export const Default = {
  name: 'Default',
  render: (args: StepRowProps) => <StepRow {...args} />
}
