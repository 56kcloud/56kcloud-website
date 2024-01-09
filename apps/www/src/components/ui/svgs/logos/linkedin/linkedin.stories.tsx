import {IconProps} from '@/models/icon.model'
import Linkedin from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Logos/Linkedin',
  component: Linkedin,
  tags: ['autodocs']
} satisfies Meta<typeof Linkedin>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IconProps) => (
    <Linkedin
      {...args}
      className='text-white'
    />
  )
}
