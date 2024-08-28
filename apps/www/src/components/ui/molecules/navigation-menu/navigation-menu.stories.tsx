import NavigationMenu, {NavigationMenuProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/NavigationMenu',
  component: NavigationMenu,
  tags: ['autodocs'],
  args: {
    navigationItems: [
      {
        title: 'Home',
        links: [
          {
            title: 'Home',
            link: '/'
          }
        ]
      },
      {
        title: 'About',
        links: [
          {
            title: 'About',
            link: '/about'
          }
        ]
      },
      {
        title: 'Services',
        links: [
          {
            title: 'Services',
            link: '/services'
          }
        ]
      },
      {
        title: 'Contact',
        links: [
          {
            title: 'Contact',
            link: '/contact'
          }
        ]
      }
    ]
  }
} satisfies Meta<typeof NavigationMenu>

export default meta

export const Default = {
  name: 'Default',
  render: (args: NavigationMenuProps) => <NavigationMenu {...args} />
}
