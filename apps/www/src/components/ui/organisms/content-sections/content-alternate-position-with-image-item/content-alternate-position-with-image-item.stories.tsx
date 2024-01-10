import {ContentAlternatePositionWithImage} from './content-alternate-position-with-image.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import ContentAlternatePositionWithImageItem from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/ContentAlternatePositionWithImageItem',
  component: ContentAlternatePositionWithImageItem,
  tags: ['autodocs'],
  argTypes: {
    imagePosition: {
      options: ['left', 'right']
    }
  },
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
  render: (args: ContentAlternatePositionWithImage) =>
    <div className='py-20 lg:py-[104px]'>
      <div className='relative px-6 mx-auto max-w-7xl lg:px-8 space-y-20 lg:space-y-28'>
        <ContentAlternatePositionWithImageItem {...args} />
      </div>
    </div>
}
