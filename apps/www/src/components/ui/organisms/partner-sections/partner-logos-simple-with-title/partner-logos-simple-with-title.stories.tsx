import {faker} from '@faker-js/faker'
import PartnerLogosSimpleWithTitle, {PartnerLogosSimpleWithTitleProps} from './index'
import partnerFactory from '@/tests/factories/partner.factory'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/PartnerSections/PartnerLogosSimpleWithTitle',
  component: PartnerLogosSimpleWithTitle,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    partners: Array.from({length: 4}, () => partnerFactory())
  }
} satisfies Meta<typeof PartnerLogosSimpleWithTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: PartnerLogosSimpleWithTitleProps) => <PartnerLogosSimpleWithTitle {...args} />
}
