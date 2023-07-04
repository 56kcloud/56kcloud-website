import {useForm} from 'react-hook-form'
import ListBox, {ListBoxProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/ListBox',
  component: ListBox,
  tags: ['autodocs']
} satisfies Meta<typeof ListBox>

export default meta

const Template = (props: ListBoxProps) => {
  const {register, setValue} = useForm()
  return <ListBox
    register={register}
    setValue={setValue}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  data: ['apple', 'orange', 'banana'],
  defaultValue: 'apple',
  name: 'fruit'
}
