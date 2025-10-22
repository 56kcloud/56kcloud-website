import {ctaFactory} from '@/tests/factories/cta.factory'
import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import HeroWithImage, {HeroWithImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/HeroSections/HeroWithImage',
  component: HeroWithImage,
  tags: ['autodocs'],
  args: {
    surtitle: faker.lorem.sentence(),
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    image: imageFactory(),
    cta: ctaFactory()
  }
} satisfies Meta<typeof HeroWithImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: HeroWithImageProps) => <HeroWithImage {...args} />
}
