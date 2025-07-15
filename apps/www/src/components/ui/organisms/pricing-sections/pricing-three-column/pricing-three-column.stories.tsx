import {faker} from '@faker-js/faker'
import PricingThreeColumns, {type PricingThreeColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/PricingSections/PricingThreeColumns',
  component: PricingThreeColumns,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.slug(),
    subtitle: faker.lorem.sentence(),
    tiers: Array.from({length: 3}, () => ({
      surtitle: faker.lorem.word(),
      title: faker.lorem.slug(),
      description: faker.lorem.sentence(),
      items: Array.from({length: 3}, () => ({text: faker.lorem.sentence(5)})),
      featured: faker.datatype.boolean()
    }))
  }
} satisfies Meta<typeof PricingThreeColumns>

export default meta

export const Default = {
  name: 'Default',
  render: (args: PricingThreeColumnProps) => <PricingThreeColumns {...args} />
}
