import {backgroundOptions} from './footer.model'
import Footer from './index'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Footer> = {
  title: 'components/Organisms/Footer',
  component: Footer,
  argTypes: {
    background: {control: 'select', options: backgroundOptions}
  },
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {}
}

export const Color: Story = {
  args: {
    background: 'color'
  }
}
