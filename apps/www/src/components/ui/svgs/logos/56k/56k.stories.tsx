import {IconProps} from '@/models/icon.model'
import Logo from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Logos/Logo',
  component: Logo,
  tags: ['autodocs']
} satisfies Meta<typeof Logo>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IconProps) => (
    <Logo
      {...args}
      className='text-white'
    />
  )
}
