import {useState} from 'react'
import ContactForm from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Contact Form',
  component: ContactForm,
  tags: ['autodocs']
} satisfies Meta<typeof ContactForm>

export default meta

const Template = () => {
  const [isOpen, setIsOpen] = useState(true)
  const {t} = useTranslation()
  return <ContactForm
    isOpen={isOpen}
    t={t}
    setIsOpen={setIsOpen}
  />
}

export const Default = Template.bind({})
Default.args = {}
