import {faker} from '@faker-js/faker'
import Checkbox, {CheckboxProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
    className: {
      control: 'text'
    }
  },
  args: {
    id: faker.lorem.word(),
    label: faker.lorem.sentence()
  }
} satisfies Meta<typeof Checkbox>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CheckboxProps) => <Checkbox {...args} />
}
