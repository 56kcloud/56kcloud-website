import Contact from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Contact',
  component: Contact,
  tags: ['autodocs']
} satisfies Meta<typeof Contact>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <Contact {...args}>Default</Contact>
}
