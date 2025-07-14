import {faker} from '@faker-js/faker'
import PricingThreeColumns, {type PricingThreeColumnsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/PricingSections/PricingThreeColumns',
  component: PricingThreeColumns,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.slug(),
    subtitle: faker.lorem.sentence(),
    tiers: Array.from({length: 3}, () => ({
      name: faker.lorem.slug(),
      price: faker.number.int({min: 100, max: 1000}),
      features: Array.from({length: 3}, () => ({text: faker.lorem.sentence(5)})),
      badge: faker.lorem.word(),
      description: faker.lorem.sentence(),
      items: Array.from({length: 3}, () => ({text: faker.lorem.sentence(5)}))
    }))
  }
} satisfies Meta<typeof PricingThreeColumns>

export default meta

export const Default = {
  name: 'Default',
  render: (args: PricingThreeColumnsProps) => <PricingThreeColumns {...args} />
}
