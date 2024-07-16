import IntroductionCardGradient from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/IntroductionCardGradient',
  component: IntroductionCardGradient,
  tags: ['autodocs']
} satisfies Meta<typeof IntroductionCardGradient>

export default meta

export const Default = {
  name: 'Default',
  render: () => <IntroductionCardGradient />
}
