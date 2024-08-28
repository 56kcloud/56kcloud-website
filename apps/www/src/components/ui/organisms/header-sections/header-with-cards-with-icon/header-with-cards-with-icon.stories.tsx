import {cardWithIconFactory} from '@/tests/factories/card-with-icon.factory'
import {faker} from '@faker-js/faker'
import HeaderWithCardsWithIcon, {HeaderWithCardsWithIconProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeaderSection/HeaderWithCardsWithIcon',
  component: HeaderWithCardsWithIcon,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    cards: Array.from({length: 3}, () => cardWithIconFactory())
  }
} satisfies Meta<typeof HeaderWithCardsWithIcon>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeaderWithCardsWithIconProps) => <HeaderWithCardsWithIcon {...args} />
}
