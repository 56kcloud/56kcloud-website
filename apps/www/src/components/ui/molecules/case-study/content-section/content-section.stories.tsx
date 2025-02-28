import {imageFactory} from '@/tests/factories/image.factory'
import CaseStudyContentSection, {
  CaseStudyContentSectionProps
} from '@/components/ui/molecules/case-study/content-section'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/case-study',
  component: CaseStudyContentSection,
  tags: ['autodocs'],
  args: {
    image: imageFactory()
  }
} satisfies Meta<typeof CaseStudyContentSection>

export default meta

export const Default = {
  name: 'Default',
  render: (args: CaseStudyContentSectionProps) => <CaseStudyContentSection {...args} />
}
