import DraftModal from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/DraftModal',
  component: DraftModal,
  tags: ['autodocs'],
  parameters: {
    docs: {
      story: {
        height: '500px'
      }
    }
  }
} satisfies Meta<typeof DraftModal>

export default meta

export const Default = {
  name: 'Default',
  render: () => <DraftModal />
}
