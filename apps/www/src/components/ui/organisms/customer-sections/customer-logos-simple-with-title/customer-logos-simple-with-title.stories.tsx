import {faker} from '@faker-js/faker'
import CustomerFactory from '@/tests/factories/customer.factory'
import CustomerLogosSimpleWithTitle, {CustomerLogosSimpleWithTitleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CustomerSections/CustomerLogosSimpleWithTitleProps',
  component: CustomerLogosSimpleWithTitle,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    customers: Array.from({length: 4}, () => CustomerFactory())
  }
} satisfies Meta<typeof CustomerLogosSimpleWithTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CustomerLogosSimpleWithTitleProps) => <CustomerLogosSimpleWithTitle {...args} />
}
