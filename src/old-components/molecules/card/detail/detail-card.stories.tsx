import {Whale} from '@/components/svgs/icons/whale'
import DetailCard from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Card/Detail',
  component: DetailCard,
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: {type: 'text'} 
    }
  },
  args: {
    title: 'Lorem ipsum',
    Icon: Whale,
    items: ['Lorem ipsum', 'Lorem ipsum', 'Lorem ipsum']
  }
} satisfies Meta<typeof DetailCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <DetailCard {...args}/>
}
