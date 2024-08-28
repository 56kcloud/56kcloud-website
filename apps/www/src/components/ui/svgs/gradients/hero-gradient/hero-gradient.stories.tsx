import HeroGradient, {HeroGradientProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/HeroGradient',
  component: HeroGradient,
  tags: ['autodocs']
} satisfies Meta<typeof HeroGradient>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeroGradientProps) => <HeroGradient {...args} />
}
