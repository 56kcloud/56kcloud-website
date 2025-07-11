import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FoundationsServicesBreakdown, {type FoundationsServicesBreakdownProps} from './index'
import type {Meta} from '@storybook/react'

const points = Array.from({length: 3}, () => ({
  icon: featureFactory<'icon'>({iconType: 'outline'}).icon,
  title: faker.lorem.slug(),
  description: faker.lorem.sentence(),
  stats: faker.lorem.sentence(4),
  solution: faker.lorem.sentence(),
  outcomeStats: faker.lorem.sentence(4),
}))

const meta = {
  title: 'components/Organisms/FoundationsSections/FoundationsServicesBreakdown',
  component: FoundationsServicesBreakdown,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.slug(),
    subtitle: faker.lorem.sentence(),
    points: points,
    cta: ctaFactory()
  }
} satisfies Meta<typeof FoundationsServicesBreakdown>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FoundationsServicesBreakdownProps) => <FoundationsServicesBreakdown {...args} />
}
