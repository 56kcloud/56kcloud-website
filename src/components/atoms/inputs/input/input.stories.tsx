import {Input, InputProps} from './index'
import {useForm} from 'react-hook-form'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Inputs/Input',
  component: Input,
  tags: ['autodocs']
} satisfies Meta<typeof Input>

export default meta

const Template = (props: InputProps) => {
  const {register} = useForm()
  return <Input
    register={register}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Input',
  name: 'Input'
}
