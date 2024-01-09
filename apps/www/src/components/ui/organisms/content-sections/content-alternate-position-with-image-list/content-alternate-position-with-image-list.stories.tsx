import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import ContentAlternatePositionWithImageList, {ContentAlternatePositionWithImageListProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/ContentAlternatePositionWithImageList',
  component: ContentAlternatePositionWithImageList,
  tags: ['autodocs'],
  args: {
    items: Array.from({length: 3}, () => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      link: faker.internet.url(),
      image: imageFactory(),
      imagePosition: 'left'
    }))
  }
} satisfies Meta<typeof ContentAlternatePositionWithImageList>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContentAlternatePositionWithImageListProps) => <ContentAlternatePositionWithImageList {...args} />
}
