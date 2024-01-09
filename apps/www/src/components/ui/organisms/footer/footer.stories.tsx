import {faker} from '@faker-js/faker'
import {serviceFactory} from '@/tests/factories/service.factory'
import {solutionFactory} from '@/tests/factories/solution.factory'
import Footer, {FooterProps} from './index'
import dictionary from '@/dictionaries/en.json'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs'],
  args: {
    dictionary,
    text: faker.lorem.sentence(),
    services: Array.from({length: 3}, () => serviceFactory()),
    solutions: Array.from({length: 3}, () => solutionFactory())
  }
} satisfies Meta<typeof Footer>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FooterProps) => <Footer {...args} />
}
