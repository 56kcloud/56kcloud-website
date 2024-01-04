import {faker} from '@faker-js/faker'
import TextArea, {TextAreaProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Inputs/TextArea',
  component: TextArea,
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
} satisfies Meta<typeof TextArea>

export default meta

export const Default = {
  name: 'Default',
  render: (args: TextAreaProps) => <TextArea {...args} />
}

export const WithError = {
  name: 'With error',
  render: (args: TextAreaProps) => (
    <TextArea
      {...args}
      error='Oops something went wrong'
    />
  )
}
