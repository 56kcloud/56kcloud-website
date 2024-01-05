import Bookmark, {BookmarkProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Bookmark',
  component: Bookmark,
  tags: ['autodocs'],
  args: {
    url: 'https://github.com/56kcloud/56kcloud-website'
  }
} satisfies Meta<typeof Bookmark>

export default meta

export const Default = {
  name: 'Default',
  render: (args: BookmarkProps) => <Bookmark {...args} />
}
