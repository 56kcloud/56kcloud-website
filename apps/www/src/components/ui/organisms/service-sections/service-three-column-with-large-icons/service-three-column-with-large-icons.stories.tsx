import {faker} from '@faker-js/faker'
import {serviceFactory} from '@/tests/factories/service.factory'
import ServiceThreeColumnWithLargeIcons, {ServiceThreeColumnWithLargeIconsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ServiceSections/ServiceThreeColumnWithLargeIcons',
  component: ServiceThreeColumnWithLargeIcons,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    services: Array.from({length: 3}, () => serviceFactory())
  }
} satisfies Meta<typeof ServiceThreeColumnWithLargeIcons>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ServiceThreeColumnWithLargeIconsProps) => <ServiceThreeColumnWithLargeIcons {...args} />
}
