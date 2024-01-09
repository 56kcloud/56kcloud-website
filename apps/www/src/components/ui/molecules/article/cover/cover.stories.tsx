import {imageFactory} from '@/tests/factories/image.factory'
import ArticleCover, {ArticleCoverProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/article/cover',
  component: ArticleCover,
  tags: ['autodocs'],
  args: {
    image: imageFactory()
  }
} satisfies Meta<typeof ArticleCover>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ArticleCoverProps) => <ArticleCover {...args} />
}
