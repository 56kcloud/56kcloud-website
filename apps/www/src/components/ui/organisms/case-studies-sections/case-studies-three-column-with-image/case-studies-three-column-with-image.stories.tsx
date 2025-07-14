import {caseStudyFactory} from '@/tests/factories/case-study.factory'
import {faker} from '@faker-js/faker'
import CaseStudiesThreeColumnWithImage, {CaseStudiesThreeColumnWithImageProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/CaseStudiesSections/CaseStudiesThreeColumnWithImage',
  component: CaseStudiesThreeColumnWithImage,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    subtitle: faker.lorem.sentence(),
    caseStudies: Array.from({length: 3}, () => caseStudyFactory())
  }
} satisfies Meta<typeof CaseStudiesThreeColumnWithImage>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CaseStudiesThreeColumnWithImageProps) => <CaseStudiesThreeColumnWithImage {...args} />
}
