import {faker} from '@faker-js/faker'
import ContentTwoColumn, {ContentTwoColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/ContentTwoColumn',
  component: ContentTwoColumn,
  tags: ['autodocs'],
  args: {
    contentLeft: faker.lorem.paragraphs(2),
    contentRight: faker.lorem.paragraphs(2)
  }
} satisfies Meta<typeof ContentTwoColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContentTwoColumnProps) => <ContentTwoColumn {...args} />
}
