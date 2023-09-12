import SmallTitleSection, {SmallTitleSectionProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Small Title Section',
  component: SmallTitleSection,
  tags: ['autodocs']
} satisfies Meta<typeof SmallTitleSection>

export default meta

const Template = (props: SmallTitleSectionProps) => {
  return <SmallTitleSection
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem ipsum',
  text: 'Text'
}
