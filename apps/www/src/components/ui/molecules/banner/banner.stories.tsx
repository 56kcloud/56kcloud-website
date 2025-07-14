import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import Banner, {BannerProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Banner',
  component: Banner,
  tags: ['autodocs'],
  args: {
    dictionary: {},
    description: faker.lorem.sentence(),
    cta: ctaFactory()
  }
} satisfies Meta<typeof Banner>

export default meta

export const Default = {
  name: 'Default',
  render: (args: BannerProps) => <Banner {...args} />
}
