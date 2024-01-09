import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureAlternatePositionImage, {FeatureAlternatePositionImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureAlternatePositionImage',
  component: FeatureAlternatePositionImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory({useImage: true}))
  }
} satisfies Meta<typeof FeatureAlternatePositionImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureAlternatePositionImageProps) => <FeatureAlternatePositionImage {...args} />
}
