import {contentAlternatePositionWithImageItemFactory} from '@/tests/factories/content-alternate-position-with-image-item.factory'
import ContentAlternatePositionWithImageList, {ContentAlternatePositionWithImageListProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/ContentAlternatePositionWithImageList',
  component: ContentAlternatePositionWithImageList,
  tags: ['autodocs'],
  args: {
    items: Array.from({length: 3}, () => contentAlternatePositionWithImageItemFactory())
  }
} satisfies Meta<typeof ContentAlternatePositionWithImageList>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContentAlternatePositionWithImageListProps) => <ContentAlternatePositionWithImageList {...args} />
}
