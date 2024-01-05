import {faker} from '@faker-js/faker'
import HeroSimpleCenter, {HeroSimpleCenterProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeroSections/HeroSimpleCenter',
  component: HeroSimpleCenter,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence()
  }
} satisfies Meta<typeof HeroSimpleCenter>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeroSimpleCenterProps) => <HeroSimpleCenter {...args} />
}
