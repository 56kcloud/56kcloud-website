import {cardWithIconFactory} from '@/tests/factories/card-with-icon.factory'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import HeaderWithCards, {HeaderWithCardsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeaderSection/HeaderWithCards',
  component: HeaderWithCards,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    image: imageFactory(),
    cards: Array.from({length: 3}, () => cardWithIconFactory())
  }
} satisfies Meta<typeof HeaderWithCards>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeaderWithCardsProps) => <HeaderWithCards {...args} />
}
