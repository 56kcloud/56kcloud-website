import {tagFactory} from '@/tests/factories/tag.factory'
import TagList, {TagListProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/TagList',
  component: TagList,
  tags: ['autodocs'],
  args: {
    tags: Array.from({length: 10}, () => tagFactory())
  }
} satisfies Meta<typeof TagList>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TagListProps) => <TagList {...args} />
}
