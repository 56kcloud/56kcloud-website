import MapGradient from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Svgs/Gradients/MapGradient',
  component: MapGradient,
  tags: ['autodocs']
} satisfies Meta<typeof MapGradient>

export default meta

export const Default = {
  name: 'Default',
  render: () => <MapGradient />
}
