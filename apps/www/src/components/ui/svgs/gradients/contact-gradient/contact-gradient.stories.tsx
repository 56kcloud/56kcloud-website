import ContactGradient from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/ContactGradient',
  component: ContactGradient,
  tags: ['autodocs']
} satisfies Meta<typeof ContactGradient>

export default meta

export const Default = {
  name: 'Default',
  render: () => <ContactGradient />
}
