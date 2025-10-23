import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureAlternatePositionImage, {FeatureAlternatePositionImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSections/FeatureAlternatePositionImage',
  component: FeatureAlternatePositionImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'image'>({imageProps: {category: 'logo'}}))
  }
} satisfies Meta<typeof FeatureAlternatePositionImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureAlternatePositionImageProps) => <FeatureAlternatePositionImage {...args} />
}
