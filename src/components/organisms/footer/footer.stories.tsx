import Footer from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Footer',
  component: Footer,
  tags: ['autodocs']
} satisfies Meta<typeof Footer>

export default meta

const Template = (props) => {
  return <Footer {...props}/>
}

export const Default = Template.bind({})
Default.args = {}

export const Blue = Template.bind({})
Blue.args = {
  version: 'blue'
}
