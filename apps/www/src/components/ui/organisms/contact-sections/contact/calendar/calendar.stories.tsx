import Calendar, {CalendarProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContactSections/Contact/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    calendar: 'darragh'
  }
} satisfies Meta<typeof Calendar>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CalendarProps) => <Calendar {...args} />
}
