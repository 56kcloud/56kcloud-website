import {TextArea, TextAreaProps} from './index'
import {useForm} from 'react-hook-form'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Atoms/Inputs/Text Area',
  component: TextArea,
  tags: ['autodocs']
} satisfies Meta<typeof TextArea>

export default meta

const Template = (props: TextAreaProps) => {
  const {register} = useForm()
  return <TextArea
    register={register}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {
  placeholder: 'Text Area',
  name: 'TextArea'
}
