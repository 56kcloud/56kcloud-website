import Spinner, {SpinnerProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Icons/Spinner',
  component: Spinner,
  tags: ['autodocs']
} satisfies Meta<typeof Spinner>

export default meta

export const Default = {
  name: 'Default',
  render: (args: SpinnerProps) => (
    <Spinner
      {...args}
      className='text-white w-10 h-10'
    />
  )
}
