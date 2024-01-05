import {faker} from '@faker-js/faker'
import MarkdownViewer, {MarkdownViewerProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/MarkdownViewer',
  component: MarkdownViewer,
  tags: ['autodocs'],
  args: {
    content: faker.lorem.paragraphs(10)
  }
} satisfies Meta<typeof MarkdownViewer>

export default meta

export const Default = {
  name: 'Default',
  render: (args: MarkdownViewerProps) => <MarkdownViewer {...args} />
}
