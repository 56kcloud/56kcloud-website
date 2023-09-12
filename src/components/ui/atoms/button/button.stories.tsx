import {buttonAlignments, buttonShapes, buttonSizes, buttonTones, buttonVariants} from './button.model'
import Button from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    tone: { 
      options: buttonTones,
      control: {type: 'select'} 
    },
    variant: { 
      options: buttonVariants,
      control: {type: 'select'} 
    },
    size: { 
      options: buttonSizes,
      control: {type: 'select'} 
    },
    shape: { 
      options: buttonShapes,
      control: {type: 'select'} 
    },
    align: { 
      options: buttonAlignments,
      control: {type: 'select'} 
    },
    disabled: { 
      control: {type: 'boolean'} 
    },
    loading: { 
      control: {type: 'boolean'} 
    }
  },
  args: {
    tone: 'primary',
    variant: 'default',
    size: 'medium',
    shape: 'rounded',
    align: 'center',
    disabled: false,
    loading: false
  }
} satisfies Meta<typeof Button>

export default meta

export const Default = {
  name: 'Default',
  render: (args) => <Button {...args}>Default</Button>
}

export const Variants = {
  name: 'Variants',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonTones.map(tone => 
        <Button
          key={tone}
          {...args}
          tone={tone}
        >
          {tone}
        </Button>
      )}
    </div>
  )
}

export const VariantsLinks = {
  name: 'Variants - Link',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonTones.map(tone => 
        <Button
          key={tone}
          {...args}
          variant='link'
          tone={tone}
        >
          {tone}
        </Button>)}
    </div>
  )
}

export const VariantsGhosts = {
  name: 'Variants - Ghost',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonTones.map(tone => 
        <Button
          key={tone}
          {...args}
          variant='ghost'
          tone={tone}
        >
          {tone}
        </Button>
      )}
    </div>
  )
}

export const Sizes = {
  name: 'Sizes',
  render: (args) => (
    <div className='flex items-center space-x-2'>
      {buttonSizes.map(size => 
        <Button
          key={size}
          {...args}
          size={size}
        >
          {size}
        </Button>
      )}
    </div>
  )
}

export const Shapes = {
  name: 'Shapes',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonShapes.map(shape => 
        <Button
          key={shape}
          {...args}
          shape={shape}
        >
          {shape}
        </Button>)}
    </div>
  )
}

export const Alignments = {
  name: 'Alignments',
  render: (args) => (
    <div className='flex flex-col'>
      {buttonAlignments.map((alignment, i) => {
        return (
          <div
            key={i}
            className={`flex flex-col py-4 space-y-2 ${i < buttonAlignments.length - 1 ? 'border-b' : ''}`}>
            <Button
              {...args}
              leading={<span className='pr-2'>leading</span>}
              align={alignment}>{alignment}
            </Button>
            <Button
              {...args}
              align={alignment}>{alignment}
            </Button>
            <Button
              {...args}
              trailing={<span className='pl-2'>trailing</span>}
              align={alignment}>{alignment}
            </Button>
          </div>
        )})}
    </div>
  )
}

export const leading = {
  name: 'With leading',
  render: (args) => 
    <Button
      {...args}
      leading={<span className='pr-2'>With leading</span>}>Button
    </Button>
}

export const trailing = {
  name: 'With trailing',
  render: (args) => 
    <Button
      {...args}
      trailing={<span className='pl-2'>With trailing</span>}>Button
    </Button>
}

export const Loading = {
  name: 'Loading',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonTones.map(tone => 
        <Button
          key={tone}
          {...args}
          tone={tone}
          loading
        >
          {tone}
        </Button>
      )}
    </div>
  )
}

export const Disabled = {
  name: 'Disabled',
  render: (args) => (
    <div className='flex space-x-2'>
      {buttonTones.map(tone => 
        <Button
          key={tone}
          {...args}
          tone={tone}
          disabled>{tone}
        </Button>
      )}
    </div>
  )
}
