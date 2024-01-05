import {tagFactory} from '@/tests/factories/tag.factory'
import TagFilter, {TagFilterProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/TagFilter',
  component: TagFilter,
  tags: ['autodocs'],
  args: {
    tags: Array.from({length: 10}, () => tagFactory())
  }
} satisfies Meta<typeof TagFilter>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TagFilterProps) => <TagFilter {...args} />
}
