import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import JoinOurTeam, {JoinOurTeamProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CtaSections/JoinOurTeam',
  component: JoinOurTeam,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.paragraph(),
    benefits: Array.from({length: 3}, () => ({
      name: faker.lorem.sentence()
    })),
    cta: ctaFactory(),
    image: imageFactory()
  }
} satisfies Meta<typeof JoinOurTeam>

export default meta

export const Default = {
  name: 'Default',
  render: (args: JoinOurTeamProps) => <JoinOurTeam {...args} />
}
