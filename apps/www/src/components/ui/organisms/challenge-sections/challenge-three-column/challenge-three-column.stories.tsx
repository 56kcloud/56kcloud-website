import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import ChallengeThreeColumn, {ChallengeThreeColumnProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ChallengeSection/ChallengeThreeColumn',
  component: ChallengeThreeColumn,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    challenges: Array.from({length: 3}, () => ({
      dictionary: {},
      icon: featureFactory<'icon'>({iconType: 'outline'}).icon,
      title: faker.lorem.slug(),
      description: faker.lorem.sentence(),
      stat: faker.lorem.sentence(4),
      solution: {
        title: faker.lorem.slug(),
        description: faker.lorem.sentence(),
        stat: faker.lorem.sentence(4)
      }
    }))
  }
} satisfies Meta<typeof ChallengeThreeColumn>

export default meta

export const Default = {
  name: 'Default',
  render: (args: ChallengeThreeColumnProps) => <ChallengeThreeColumn {...args} />
}
