import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import {imageFactory} from '@/tests/factories/image.factory'
import FeatureThreeColumnsWithImage, {FeatureThreeColumnsWithImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureThreeColumnsWithImage',
  component: FeatureThreeColumnsWithImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () =>
      featureFactory<'image'>({
        imageProps: imageFactory({})
      })
    )
  }
} satisfies Meta<typeof FeatureThreeColumnsWithImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureThreeColumnsWithImageProps) => <FeatureThreeColumnsWithImage {...args} />
}
