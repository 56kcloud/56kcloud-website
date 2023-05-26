import MediumTitleSection, {MediumTitleSectionProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Medium Title Section',
  component: MediumTitleSection,
  tags: ['autodocs']
} satisfies Meta<typeof MediumTitleSection>

export default meta

const Template = (props: MediumTitleSectionProps) => {
  return <MediumTitleSection
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem ipsum',
  subTitle: 'Sub title',
  textColLeft: 'Text col left',
  textColRight: 'Text col right'
}
