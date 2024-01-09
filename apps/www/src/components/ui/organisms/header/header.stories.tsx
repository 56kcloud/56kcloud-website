import Header, {HeaderProps} from './index'
import dictionary from '@/dictionaries/en.json'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Header',
  component: Header,
  tags: ['autodocs'],
  args: {
    dictionary
  },
  parameters: {
    docs: {
      story: {
        height: '200px'
      }
    }
  }
} satisfies Meta<typeof Header>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeaderProps) => <Header {...args} />
}
