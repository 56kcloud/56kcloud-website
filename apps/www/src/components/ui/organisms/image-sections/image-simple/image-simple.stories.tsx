import {imageFactory} from '@/tests/factories/image.factory'
import ImageSimple, {ImageSimpleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ImageSections/ImageSimple',
  component: ImageSimple,
  tags: ['autodocs'],
  args: {
    image: imageFactory()
  }
} satisfies Meta<typeof ImageSimple>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ImageSimpleProps) => <ImageSimple {...args} />
}
