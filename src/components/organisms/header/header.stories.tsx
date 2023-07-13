import Header, {HeaderProps} from './header'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Header',
  component: Header,
  tags: ['autodocs']
} satisfies Meta<typeof Header>

export default meta

const Template = (props: HeaderProps) => {
  return <Header {...props}/>
}

export const Default = Template.bind({})
Default.args = {}
