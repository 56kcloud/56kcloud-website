import {faker} from '@faker-js/faker'
import {locationFactory} from '@/tests/factories/location.factory'
import ContactWithGradient, {ContactWithGradientProps} from './index'
import dictionary from '@/dictionaries/en.json'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContactSections/ContactWithGradient',
  component: ContactWithGradient,
  tags: ['autodocs'],
  args: {
    dictionary,
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    locations: Array.from({length: 3}, () => locationFactory())
  }
} satisfies Meta<typeof ContactWithGradient>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContactWithGradientProps) => <ContactWithGradient {...args} />
}
