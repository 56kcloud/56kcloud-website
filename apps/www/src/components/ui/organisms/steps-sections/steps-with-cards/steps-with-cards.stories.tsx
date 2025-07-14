import {faker} from '@faker-js/faker'
import {iconFactory} from '@/tests/factories/icon.factory'
import StepsWithCards, {StepsWithCardsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/StepsSections/StepsWithCards',
  component: StepsWithCards,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    steps: Array.from({length: 9}, () => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      icon: iconFactory({type: 'outline', name: 'AcademicCapIcon'})
    })),
    cards: Array.from({length: 9}, () => ({
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      icon: iconFactory({type: 'outline', name: 'AcademicCapIcon'})
    }))
  }
} satisfies Meta<typeof StepsWithCards>

export default meta

export const Default = {
  name: 'Default',
  render: (args: StepsWithCardsProps) => <StepsWithCards {...args} />
}
