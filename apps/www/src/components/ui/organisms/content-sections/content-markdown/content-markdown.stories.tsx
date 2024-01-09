import {faker} from '@faker-js/faker'
import ContentMarkdown, {ContentMarkdownProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/ContentMarkdown',
  component: ContentMarkdown,
  tags: ['autodocs'],
  args: {
    content: faker.lorem.paragraphs(10)
  }
} satisfies Meta<typeof ContentMarkdown>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContentMarkdownProps) => <ContentMarkdown {...args} />
}
