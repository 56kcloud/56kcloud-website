import {Checkbox, CheckboxProps} from './index'
import {useForm} from 'react-hook-form'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Inputs/Checkbox',
  component: Checkbox,
  tags: ['autodocs']
} satisfies Meta<typeof Checkbox>

export default meta

const Template = (props: CheckboxProps) => {
  const {register} = useForm()
  return <Checkbox
    register={register}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
  name: 'checkbox',
  label: 'Checkbox'
}
