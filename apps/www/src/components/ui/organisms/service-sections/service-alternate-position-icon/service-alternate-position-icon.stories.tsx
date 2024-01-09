import {faker} from '@faker-js/faker'
import {serviceFactory} from '@/tests/factories/service.factory'
import ServiceAlternatePositionIcon, {ServiceAlternatePositionIconProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ServiceSections/ServiceAlternatePositionIcon',
  component: ServiceAlternatePositionIcon,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    services: Array.from({length: 4}, () => serviceFactory())
  }
} satisfies Meta<typeof ServiceAlternatePositionIcon>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ServiceAlternatePositionIconProps) => <ServiceAlternatePositionIcon {...args} />
}
