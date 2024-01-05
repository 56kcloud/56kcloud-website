import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import HeroSimpleCenterWithBackground, {HeroSimpleCenterWithBackgroundProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeroSections/HeroSimpleCenterWithBackground',
  component: HeroSimpleCenterWithBackground,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    image: imageFactory(),
    leftCTA: ctaFactory(),
    rightCTA: ctaFactory({tone: 'secondary'})
  }
} satisfies Meta<typeof HeroSimpleCenterWithBackground>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeroSimpleCenterWithBackgroundProps) => <HeroSimpleCenterWithBackground {...args} />
}
