import Message, {MessageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContactSections/Contact/Message',
  component: Message,
  tags: ['autodocs']
} satisfies Meta<typeof Message>

export default meta

export const Default = {
  name: 'Default',
  render: (args: MessageProps) => <Message {...args} />
}
