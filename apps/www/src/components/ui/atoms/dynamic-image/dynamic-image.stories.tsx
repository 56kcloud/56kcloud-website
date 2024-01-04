import {faker} from '@faker-js/faker'
import DynamicImage, {DynamicImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/DynamicImage',
  component: DynamicImage,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text'
    },
    maxHeight: {
      control: 'number'
    }
  },
  args: {
    src: faker.image.url(),
    maxHeight: 418
  }
} satisfies Meta<typeof DynamicImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: DynamicImageProps) => <DynamicImage {...args} />
}
