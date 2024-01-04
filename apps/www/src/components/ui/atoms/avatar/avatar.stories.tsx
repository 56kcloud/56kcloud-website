import Avatar, {AvatarProps, avatarSizes} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: avatarSizes,
      control: {type: 'select'}
    }
  },
  args: {
    size: 'sm'
  }
} satisfies Meta<typeof Avatar>

export default meta

export const Default = {
  name: 'Default',
  render: (args: AvatarProps) => <Avatar {...args} />
}

export const Sizes = {
  name: 'Sizes',
  render: (args: AvatarProps) => (
    <div className='flex space-x-2 items-center'>
      {avatarSizes.map((size) => (
        <Avatar
          key={size}
          {...args}
          size={size}
        />
      ))}
    </div>
  )
}
