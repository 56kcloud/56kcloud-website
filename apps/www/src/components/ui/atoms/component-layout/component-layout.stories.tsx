import ComponentLayout, {ComponentLayoutProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'Components/Atoms/ComponentLayout',
  component: ComponentLayout,
  tags: ['autodocs'],
  args: {
    children: 'HELLO'
  }
} satisfies Meta<typeof ComponentLayout>

export default meta

export const Default = {
  name: 'Default',
  render: (props: ComponentLayoutProps) => (
    <ComponentLayout
      {...props}
      className='w-8 h-8'
    />
  )
}
