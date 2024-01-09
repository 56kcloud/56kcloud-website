import LanguageSwitcher, {LanguageSwitcherProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/LanguageSwitcher',
  component: LanguageSwitcher,
  tags: ['autodocs'],
  args: {
    mobileMenuOpen: false
  }
} satisfies Meta<typeof LanguageSwitcher>

export default meta

export const Default = {
  name: 'Default',
  render: (args: LanguageSwitcherProps) => <LanguageSwitcher {...args} />
}
