import Description, {DescriptionProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Description',
  component: Description,
  tags: ['autodocs']
} satisfies Meta<typeof Description>

export default meta

const Template = (props: DescriptionProps) => {
  return <Description {...props}/>
}

export const Default = Template.bind({})
Default.args = {
  surtitle: 'surtitle',
  text: 'text',
  items: ['1', '2', '3']
}
