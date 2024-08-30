import {IconProps} from '@/models/icon.model'
import Mail from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Logos/Mail',
  component: Mail,
  tags: ['autodocs']
} satisfies Meta<typeof Mail>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IconProps) => (
    <Mail
      {...args}
      className='text-white w-10 h-10'
    />
  )
}
