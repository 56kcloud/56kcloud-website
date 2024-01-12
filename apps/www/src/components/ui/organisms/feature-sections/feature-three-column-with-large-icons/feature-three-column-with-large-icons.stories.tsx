import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureThreeColumnWithLargeIcons, {FeatureThreeColumnWithLargeIconsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSection/FeatureThreeColumnWithLargeIcons',
  component: FeatureThreeColumnWithLargeIcons,
  tags: ['autodocs'],
  argTypes: {
    titleAlignment: {
      options: ['left', 'center'],
      control: {type: 'select'}
    }
  },
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'})),
    titleAlignment: 'left'
  }
} satisfies Meta<typeof FeatureThreeColumnWithLargeIcons>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureThreeColumnWithLargeIconsProps) => <FeatureThreeColumnWithLargeIcons {...args} />
}
