import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import ValueTwoColumn, {ValueTwoColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ValueSections/ValueTwoColumn',
  component: ValueTwoColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    values: Array.from({length: 3}, () => ({
      name: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      background: imageFactory()
    }))
  }
} satisfies Meta<typeof ValueTwoColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ValueTwoColumnProps) => <ValueTwoColumn {...args} />
}
