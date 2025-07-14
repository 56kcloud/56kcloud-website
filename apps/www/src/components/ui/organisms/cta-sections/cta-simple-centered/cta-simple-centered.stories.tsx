import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import CTASimpleCentered, {CTASimpleCenteredProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CtaSections/CTASimpleCentered',
  component: CTASimpleCentered,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    cta: ctaFactory()
  }
} satisfies Meta<typeof CTASimpleCentered>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CTASimpleCenteredProps) => <CTASimpleCentered {...args} />
}
