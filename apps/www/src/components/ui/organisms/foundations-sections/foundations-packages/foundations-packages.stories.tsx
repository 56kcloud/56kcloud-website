import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FoundationsPackage, {FoundationsPackageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FoundationsSections/FoundationsPackage',
  component: FoundationsPackage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FoundationsPackage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FoundationsPackageProps) => <FoundationsPackage {...args} />
}
