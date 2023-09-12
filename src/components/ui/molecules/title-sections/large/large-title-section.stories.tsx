import LargeTitleSection, {LargeTitleSectionProps} from './index'
import groupOfPeople from '../../../../../public/images/illustrations/group-of-people.webp'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Large Title Section',
  component: LargeTitleSection,
  tags: ['autodocs']
} satisfies Meta<typeof LargeTitleSection>

export default meta

const Template = (props: LargeTitleSectionProps) => {
  return <LargeTitleSection
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem ipsum',
  surtile: 'Sur title',
  text: 'Text',
  backgroundImage: {
    src: groupOfPeople,
    alt: 'alt'
  }
}
