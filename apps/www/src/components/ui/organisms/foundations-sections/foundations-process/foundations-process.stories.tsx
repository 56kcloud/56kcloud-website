import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FoundationsProcess, {type FoundationsProcessProps} from './index'
import type {Meta} from '@storybook/react'

const process = Array.from({length: 3}, (_,i) => ({
  number: i + 1,
  title: faker.lorem.slug(),
  description: faker.lorem.sentence(),
  badge: faker.lorem.word(),
  items: Array.from({length: 3}, () => faker.lorem.sentence(5))
}))

const meta = {
  title: 'components/Organisms/FoundationsSections/FoundationsProcess',
  component: FoundationsProcess,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.slug(),
    subtitle: faker.lorem.sentence(),
    processes: process,
    benefits: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FoundationsProcess>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FoundationsProcessProps) => <FoundationsProcess {...args} />
}
