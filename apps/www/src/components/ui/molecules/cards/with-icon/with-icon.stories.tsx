import {CardWithIconProps} from '@/models/card.model'
import {faker} from '@faker-js/faker'
import {iconFactory} from '@/tests/factories/icon.factory'
import CardWithIcon from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/WithIcon',
  component: CardWithIcon,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    icon: iconFactory()
  }
} satisfies Meta<typeof CardWithIcon>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CardWithIconProps) => <CardWithIcon {...args} />
}
