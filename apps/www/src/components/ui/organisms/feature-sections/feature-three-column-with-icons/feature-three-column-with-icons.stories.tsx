import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureThreeColumnWithIcons, {FeatureThreeColumnWithIconsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSections/FeatureThreeColumnWithIcons',
  component: FeatureThreeColumnWithIcons,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FeatureThreeColumnWithIcons>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureThreeColumnWithIconsProps) => <FeatureThreeColumnWithIcons {...args} />
}
