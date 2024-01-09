import {faker} from '@faker-js/faker'
import Input, {InputProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/inputs/Input',
  component: Input,
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
} satisfies Meta<typeof Input>

export default meta

export const Default = {
  name: 'Default',
  render: (args: InputProps) => <Input {...args} />
}

export const WithError = {
  name: 'With error',
  render: (args: InputProps) => (
    <Input
      {...args}
      error='Oops something went wrong'
    />
  )
}
