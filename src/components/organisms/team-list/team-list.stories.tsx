import TeamList, {TeamListProps} from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Team List',
  component: TeamList,
  tags: ['autodocs']
} satisfies Meta<typeof TeamList>

export default meta

const Template = (props: TeamListProps) => {
  const {t} = useTranslation()
  return <TeamList
    t={t}
    {...props}
  />
}

export const Default = Template.bind({})
Default.args = {}
