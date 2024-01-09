import {articleFactory} from '@/tests/factories/article.factory'
import {faker} from '@faker-js/faker'
import BlogThreeColumn, {BlogThreeColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/BlogSections/BlogThreeColumn',
  component: BlogThreeColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    articles: Array.from({length: 3}, () => articleFactory())
  }
} satisfies Meta<typeof BlogThreeColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: BlogThreeColumnProps) => <BlogThreeColumn {...args} />
}
