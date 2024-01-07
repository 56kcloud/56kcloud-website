import {IconProps} from '@/models/icon.model'
import X from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Logos/X',
  component: X,
  tags: ['autodocs']
} satisfies Meta<typeof X>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IconProps) => (
    <X
      {...args}
      className='text-white w-10 h-10'
    />
  )
}
