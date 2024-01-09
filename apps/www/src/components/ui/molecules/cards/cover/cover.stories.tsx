import {imageFactory} from '@/tests/factories/image.factory'
import CardCover, {CardCoverProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Cards/CardCover',
  component: CardCover,
  tags: ['autodocs'],
  args: {
    image: imageFactory(),
    fixedHeight: true
  }
} satisfies Meta<typeof CardCover>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CardCoverProps) => <CardCover {...args} />
}
