import CompanyList from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Company List',
  component: CompanyList,
  tags: ['autodocs']
} satisfies Meta<typeof CompanyList>

export default meta

const Template = () => {
  // return <CompanyList/>
  return <div></div>
}

export const Default = Template.bind({})
Default.args = {}
