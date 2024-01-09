import {ContentAlternatePositionWithImage} from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item/content-alternate-position-with-image.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import ContentAlternatePositionWithImageItem from '@/components/ui/organisms/content-sections/content-alternate-position-with-image-item/index'
import type {Meta} from '@storybook/react'


const meta = {
  title: 'components/Organisms/ContentSections/ContentAlternatePositionWithImageItem',
  component: ContentAlternatePositionWithImageItem,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    link: faker.internet.url(),
    image: imageFactory(),
    imagePosition: 'left'
  }
} satisfies Meta<typeof ContentAlternatePositionWithImageItem>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContentAlternatePositionWithImage) => <ContentAlternatePositionWithImageItem {...args} />
}
