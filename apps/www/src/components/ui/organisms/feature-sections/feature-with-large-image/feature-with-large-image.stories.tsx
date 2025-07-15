import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import FeatureWithLargeImage, {FeatureWithLargeImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureWithLargeImage',
  component: FeatureWithLargeImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    image: imageFactory({})
  }
} satisfies Meta<typeof FeatureWithLargeImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureWithLargeImageProps) => <FeatureWithLargeImage {...args} />
}
