import {articleFactory} from '@/tests/factories/article.factory'
import ArticleCard, {ArticleCardProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/Article',
  component: ArticleCard,
  tags: ['autodocs'],
  args: {
    article: articleFactory(),
    fixedHeight: true
  }
} satisfies Meta<typeof ArticleCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ArticleCardProps) => <ArticleCard {...args} />
}
