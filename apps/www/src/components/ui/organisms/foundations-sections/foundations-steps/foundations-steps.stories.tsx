import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FoundationsSteps, {FoundationsStepsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FoundationsSections/FoundationsSteps',
  component: FoundationsSteps,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    steps: Array.from({length: 9}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FoundationsSteps>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FoundationsStepsProps) => <FoundationsSteps {...args} />
}
