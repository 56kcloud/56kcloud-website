import {BadgeProps, badgeColors} from './index'
import Badge from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: {type: 'string'}
    },
    color: {
      options: badgeColors,
      control: {type: 'select'}
    }
  },
  args: {
    children: 'Badge',
    color: 'default'
  }
} satisfies Meta<typeof Badge>

export default meta

export const Default = {
  name: 'Default',
  render: (args: BadgeProps) => <Badge {...args} />
}

export const Sizes = {
  name: 'Sizes',
  render: (args: BadgeProps) => (
    <div className='flex space-x-2 items-center'>
      {badgeColors.map((color) => (
        <Badge
          key={color}
          {...args}
          color={color}
        >
          {color}
        </Badge>
      ))}
    </div>
  )
}
