import {faker} from '@faker-js/faker'
import {serviceFactory} from '@/tests/factories/service.factory'
import ServiceMasonryCard, {ServiceMasonryCardProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ServiceSections/ServiceMasonryCard',
  component: ServiceMasonryCard,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    services: Array.from({length: 3}, () => serviceFactory())
  }
} satisfies Meta<typeof ServiceMasonryCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ServiceMasonryCardProps) => <ServiceMasonryCard {...args} />
}
