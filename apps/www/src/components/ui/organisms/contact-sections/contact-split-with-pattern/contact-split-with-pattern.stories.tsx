import {faker} from '@faker-js/faker'
import {locationFactory} from '@/tests/factories/location.factory'
import ContactSplitWithPattern, {ContactSplitWithPatternProps} from './index'
import dictionary from '@/dictionaries/en.json'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContactSections/ContactSplitWithPattern',
  component: ContactSplitWithPattern,
  tags: ['autodocs'],
  args: {
    dictionary,
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    locations: Array.from({length: 3}, () => locationFactory())
  }
} satisfies Meta<typeof ContactSplitWithPattern>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ContactSplitWithPatternProps) => <ContactSplitWithPattern {...args} />
}
