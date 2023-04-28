import LanguageSwitcher from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Language Switcher',
  component: LanguageSwitcher,
  tags: ['autodocs']
} satisfies Meta<typeof LanguageSwitcher>

export default meta

const Template = () => {
  return <LanguageSwitcher/>
}

export const Default = Template.bind({})
Default.args = {}
