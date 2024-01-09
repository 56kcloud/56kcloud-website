import {articleFactory} from '@/tests/factories/article.factory'
import ArticleCard from '../cards/article'
import MasonryLayout from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/MasonryLayout',
  component: MasonryLayout,
  tags: ['autodocs']
} satisfies Meta<typeof MasonryLayout>

export default meta

const articles = Array.from({length: 10}, (_, idx) => (
  <ArticleCard
    key={idx}
    article={articleFactory()}
  />
))

export const Default = {
  name: 'Default',
  render: () => <MasonryLayout>{articles}</MasonryLayout>
}
