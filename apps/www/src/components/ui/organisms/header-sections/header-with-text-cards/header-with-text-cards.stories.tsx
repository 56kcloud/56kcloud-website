import {faker} from '@faker-js/faker'
import HeaderWithTextCards, {HeaderWithTextCardsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeaderSection/HeaderWithTextCards',
  component: HeaderWithTextCards,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    cards: [
      {
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph()
      },
      {
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph()
      },
      {
        title: faker.lorem.words(3),
        description: faker.lorem.paragraph()
      }
    ]
  }
} satisfies Meta<typeof HeaderWithTextCards>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeaderWithTextCardsProps) => <HeaderWithTextCards {...args} />
}
