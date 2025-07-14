import {faker} from '@faker-js/faker'
import {featureFactory} from '@/tests/factories/feature.factory'
import FeatureThreeColumnWithIconsAndCTAs, {FeatureThreeColumnWithIconsAndCTAsProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/FeatureSections/FeatureThreeColumnWithIconsAndCTAs',
  component: FeatureThreeColumnWithIconsAndCTAs,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    features: Array.from({length: 3}, () => featureFactory<'icon'>({iconType: 'outline'}))
  }
} satisfies Meta<typeof FeatureThreeColumnWithIconsAndCTAs>

export default meta

export const Default = {
  name: 'Default',
  render: (args: FeatureThreeColumnWithIconsAndCTAsProps) => <FeatureThreeColumnWithIconsAndCTAs {...args} />
}
