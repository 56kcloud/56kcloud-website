import Surtitle from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Surtitle',
  component: Surtitle,
  tags: ['autodocs'],
  argTypes: {
    text: { 
      control: {type: 'text'} 
    }
  },
  args: {
    text: 'Lorem ipsum'
  }
} satisfies Meta<typeof Surtitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <Surtitle {...args}/>
}
