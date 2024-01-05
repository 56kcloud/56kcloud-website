import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import {tagFactory} from '@/tests/factories/tag.factory'
import {teamMemberFactory} from '@/tests/factories/team-member.factory'
import ArticleContentSection, {ArticleContentSectionProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/article/content-section',
  component: ArticleContentSection,
  tags: ['autodocs'],
  args: {
    image: imageFactory(),
    tags: Array.from({length: 3}, () => tagFactory()),
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    publishedOn: faker.date.past().toISOString(),
    author: teamMemberFactory()
  }
} satisfies Meta<typeof ArticleContentSection>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ArticleContentSectionProps) => <ArticleContentSection {...args} />
}
