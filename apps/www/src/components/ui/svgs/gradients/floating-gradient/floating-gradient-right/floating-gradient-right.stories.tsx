import FloatingGradientRight, {FloatingGradientProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/FloatingGradientRight',
  component: FloatingGradientRight,
  tags: ['autodocs']
} satisfies Meta<typeof FloatingGradientRight>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FloatingGradientProps) => <FloatingGradientRight {...args} />
}
