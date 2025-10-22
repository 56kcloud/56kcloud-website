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
    image: imageFactory()
  }
} satisfies Meta<typeof HeroWithImage>

export default meta

export const RightImageWithoutCTA = {
  name: 'Right Image without CTA',
  args: {
    imagePosition: 'right'
  },
  render: (args: HeroWithImageProps) => <HeroWithImage {...args} />
}

export const RightImageWithCTA = {
  name: 'Right Image with CTA',
  args: {
    imagePosition: 'right',
    cta: ctaFactory()
  },
  render: (args: HeroWithImageProps) => <HeroWithImage {...args} />
}

export const LeftImageWithoutCTA = {
  name: 'Left Image without CTA',
  args: {
    imagePosition: 'left'
  },
  render: (args: HeroWithImageProps) => <HeroWithImage {...args} />
}

export const LeftImageWithCTA = {
  name: 'Left Image with CTA',
  args: {
    imagePosition: 'left',
    cta: ctaFactory()
  },
  render: (args: HeroWithImageProps) => <HeroWithImage {...args} />
}
