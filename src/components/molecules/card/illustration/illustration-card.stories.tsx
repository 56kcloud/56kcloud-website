import IllustrationCard from './index'
import devops from '../../../../../public/images/illustrations/devops.webp'
import docker from '../../../../../public/images/icons/docker.webp'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Card/Illustration',
  component: IllustrationCard,
  tags: ['autodocs'],
  argTypes: {
    title: { 
      control: {type: 'text'} 
    },
    description: { 
      control: {type: 'text'} 
    },
    number: {
      control: {type: 'number'}
    }
  },
  args: {
    title: 'Lorem ipsum',
    icon: docker,
    image: devops,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam id tincidunt euismod,\
     diam id tincidunt.',
    number: 1
  }
} satisfies Meta<typeof IllustrationCard>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <IllustrationCard {...args}/>
}

export const Light = {
  name: 'Light',
  render: (args) => 
    <IllustrationCard
      theme='light'
      {...args}
    />
}
