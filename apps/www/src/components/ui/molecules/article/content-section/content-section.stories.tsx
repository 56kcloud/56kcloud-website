import {ImageProps} from '@/models/image.model'
import {faker} from '@faker-js/faker'
import ArticleContentSection, {ArticleContentSectionProps} from './index'
import type {Meta} from '@storybook/react'

const fakeImage: ImageProps = {
  id: faker.number.int(),
  caption: faker.lorem.words(3),
  createdAt: faker.date.past().toISOString(),
  updatedAt: faker.date.past().toISOString(),
  ext: 'jpg',
  folderPath: faker.system.filePath(),
  name: faker.system.fileName(),
  hash: faker.string.uuid(),
  mime: faker.system.mimeType(),
  placeholder: faker.image.url({width: 1000, height: 500}),
  provider: 'local',
  size: faker.number.int(),
  alternateText: faker.lorem.words(3),
  url: faker.image.url({width: 1000, height: 500}),
  height: 500,
  width: 1000
}

const meta = {
  title: 'components/Molecules/article/content-section',
  component: ArticleContentSection,
  tags: ['autodocs'],
  argTypes: {
    // id: {
    //   control: 'text'
    // },
    // label: {
    //   control: 'text'
    // },
    // className: {
    //   control: 'text'
    // }
  },
  args: {
    image: fakeImage,
    tags: [],
    title: faker.lorem.words(3),
    content: faker.lorem.paragraphs(3),
    publishedOn: faker.date.past().toISOString(),
    author: {
      name: faker.person.fullName(),
      slug: faker.lorem.slug(),
      avatar: fakeImage
    }
  }
} satisfies Meta<typeof ArticleContentSection>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ArticleContentSectionProps) => <ArticleContentSection {...args} />
}
