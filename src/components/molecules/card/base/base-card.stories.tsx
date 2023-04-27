// import {buttonAlignments, buttonShapes, buttonSizes, buttonTones, buttonVariants} from './button.model'
import BaseCard from './index'
import docker from '../../../../../public/images/icons/docker.webp'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Card/Base',
  component: BaseCard,
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: {type: 'text'} 
    },
    number: { 
      control: {type: 'number'} 
    }
  },
  args: {
    title: 'Lorem ipsum',
    number: 1,
    icon: docker
  }
} satisfies Meta<typeof BaseCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <BaseCard {...args}/>
}
