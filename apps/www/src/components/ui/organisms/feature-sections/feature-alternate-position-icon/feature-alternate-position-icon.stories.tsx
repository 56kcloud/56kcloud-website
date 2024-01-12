import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureAlternatePositionIcon, {FeatureAlternatePositionIconProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureAlternatePositionIcon',
  component: FeatureAlternatePositionIcon,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FeatureAlternatePositionIcon>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureAlternatePositionIconProps) => <FeatureAlternatePositionIcon {...args} />
}
