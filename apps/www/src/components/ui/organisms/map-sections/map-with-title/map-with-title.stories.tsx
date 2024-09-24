import {faker} from '@faker-js/faker'
import MapWithTitle, {MapWithTitleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/MapSections/MapWithTitle',
  component: MapWithTitle,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.words(),
    subtitle: faker.lorem.sentence()
  }
} satisfies Meta<typeof MapWithTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: MapWithTitleProps) => <MapWithTitle {...args} />
}
