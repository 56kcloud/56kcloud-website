import {Feature} from '@/models/feature.model'
import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureOneColumn, {FeatureOneColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureOneColumn',
  component: FeatureOneColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory({type: 'icon'}) as Feature<'icon'>)
  }
} satisfies Meta<typeof FeatureOneColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureOneColumnProps) => <FeatureOneColumn {...args} />
}
