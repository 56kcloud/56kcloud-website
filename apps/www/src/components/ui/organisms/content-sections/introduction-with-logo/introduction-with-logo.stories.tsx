import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import IntroductionWithLogo, {IntroductionWithLogoProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/ContentSections/IntroductionWithLogo',
  component: IntroductionWithLogo,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    logo: imageFactory()
  }
} satisfies Meta<typeof IntroductionWithLogo>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IntroductionWithLogoProps) => <IntroductionWithLogo {...args} />
}
