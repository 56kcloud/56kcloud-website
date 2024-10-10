import {imageFactory} from '../../../../tests/factories/image.factory'
import InfiniteSliderLogos, {InfiniteSliderLogosProps} from './index'
import React from 'react'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/InfiniteSliderLogos',
  component: InfiniteSliderLogos,
  tags: ['autodocs'],
  args: {
    logos: Array.from({length: 4}, () => imageFactory())
  }
} satisfies Meta<typeof InfiniteSliderLogos>

export default meta

export const Default = {
  name: 'Default',
  render: (args: InfiniteSliderLogosProps) => <InfiniteSliderLogos {...args} />
}
