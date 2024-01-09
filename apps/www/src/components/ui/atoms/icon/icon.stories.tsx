import {iconNames, iconTypes} from '@/models/icon.model'
import Icon, {IconProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    type: {
      options: iconTypes,
      control: 'select'
    },
    name: {
      options: iconNames,
      control: 'select'
    }
  },
  args: {
    name: iconNames[0],
    type: iconTypes[0]
  }
} satisfies Meta<typeof Icon>

export default meta

export const Default = {
  name: 'Default',
  render: (args: IconProps) => (
    <Icon
      {...args}
      className='w-8 h-8'
    />
  )
}

export const OutlineIcons = {
  name: 'Outline Icons',
  render: () => (
    <div className='grid grid-cols-4'>
      {iconNames.map((name) => (
        <div
          key={name}
          className='flex flex-col items-center'
        >
          <Icon
            name={name}
            type='outline'
            className='w-8 h-8 m-2'
          />
          <p className='text-white text-xs'>{name}</p>
        </div>
      ))}
    </div>
  )
}

export const SolidIcons = {
  name: 'Solid Icons',
  render: () => (
    <div className='grid grid-cols-4'>
      {iconNames.map((name) => (
        <div
          key={name}
          className='flex flex-col items-center text-white'
        >
          <Icon
            name={name}
            type='solid'
            className='w-8 h-8 m-2'
          />
          <p className='text-xs'>{name}</p>
        </div>
      ))}
    </div>
  )
}
