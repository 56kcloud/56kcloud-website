import {faker} from '@faker-js/faker'
import {locationFactory} from '@/tests/factories/location.factory'
import Contact, {ContactProps} from './index'
import dictionary from '@/dictionaries/en.json'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContactSections/Contact',
  component: Contact,
  tags: ['autodocs'],
  args: {
    dictionary,
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    locations: Array.from({length: 3}, () => locationFactory())
  }
} satisfies Meta<typeof Contact>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContactProps) => <Contact {...args} />
}
