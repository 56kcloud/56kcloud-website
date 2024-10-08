import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import HeroWithFloatingGradients, {HeroWithFloatingGradientsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeroSections/HeroWithFloatingGradients',
  component: HeroWithFloatingGradients,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    image: imageFactory(),
    cta: ctaFactory()
  }
} satisfies Meta<typeof HeroWithFloatingGradients>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeroWithFloatingGradientsProps) => <HeroWithFloatingGradients {...args} />
}
