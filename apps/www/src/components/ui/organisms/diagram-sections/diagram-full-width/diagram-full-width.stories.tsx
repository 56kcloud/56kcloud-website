import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import DiagramFullWidth, {DiagramFullWidthProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/DiagramFullWidth',
  component: DiagramFullWidth,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '500px'
      }
    }
  },
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    image: imageFactory({width: 800, height: 200})
  }
} satisfies Meta<typeof DiagramFullWidth>

export default meta

export const Default = {
  name: 'Default',
  render: (args: DiagramFullWidthProps) => <DiagramFullWidth {...args} />
}
