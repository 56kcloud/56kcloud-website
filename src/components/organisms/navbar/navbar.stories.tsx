import Navbar, {NavbarProps} from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Navbar',
  component: Navbar,
  tags: ['autodocs']
} satisfies Meta<typeof Navbar>

export default meta

const Template = (props: NavbarProps) => {
  const {t} = useTranslation()
  return <Navbar
    t={t}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {}
