import {CardProps} from '@/models/card.model'
import {faker} from '@faker-js/faker'
import TextCard from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/TextCard',
  component: TextCard,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence()
  }
} satisfies Meta<typeof TextCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CardProps) => <TextCard {...args} />
}
