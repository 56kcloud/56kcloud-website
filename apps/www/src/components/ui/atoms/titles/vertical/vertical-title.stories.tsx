import VerticalTitle, {VerticalTitleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/VerticalTitle',
  component: VerticalTitle,
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: {type: 'text'} 
    }
  },
  args: {
    title: 'Lorem ipsum'
  }
} satisfies Meta<typeof VerticalTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: VerticalTitleProps) => <div className='h-96'>
    <div className='text-black xl:hidden'>
      This component is only displayed on large screens.
    </div>
    <VerticalTitle {...args}/>
  </div>
}
