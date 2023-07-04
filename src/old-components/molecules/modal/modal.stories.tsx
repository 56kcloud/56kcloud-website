import {useState} from 'react'
import Modal, {ModalProps} from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Modal',
  component: Modal,
  tags: ['autodocs']
} satisfies Meta<typeof Modal>

export default meta

const Template = (props: ModalProps) => {
  const {t} = useTranslation()
  const [isOpen, setIsOpen] = useState(true)
  return <Modal
    {...props}
    isOpen={isOpen}
    closeModal={() => setIsOpen(state => !state)}
    t={t}
  />
}

export const Default = Template.bind({})
Default.args = {
  title: 'Lorem ipsum',
  modalHeader: 'Header',
  children: 'Children'
}
