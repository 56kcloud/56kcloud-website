import {articleFactory} from '@/tests/factories/article.factory'
import {faker} from '@faker-js/faker'
import BlogMasonry, {BlogMasonryProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/BlogSections/BlogMasonry',
  component: BlogMasonry,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    articles: Array.from({length: 10}, () => articleFactory())
  }
} satisfies Meta<typeof BlogMasonry>

export default meta

export const Default = {
  name: 'Default',
  render: (args: BlogMasonryProps) => <BlogMasonry {...args} />
}
