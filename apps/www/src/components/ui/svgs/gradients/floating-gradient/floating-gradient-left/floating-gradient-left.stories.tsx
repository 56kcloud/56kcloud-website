import FloatingGradientLeft, {FloatingGradientProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/FloatingGradientLeft',
  component: FloatingGradientLeft,
  tags: ['autodocs']
} satisfies Meta<typeof FloatingGradientLeft>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FloatingGradientProps) => <FloatingGradientLeft {...args} />
}
