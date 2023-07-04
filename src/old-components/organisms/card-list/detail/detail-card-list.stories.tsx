import {getDetailsCardsTraining} from '@/data/training'
import DetailCardList, {DetailCardListProps} from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Card List/Detail',
  component: DetailCardList,
  tags: ['autodocs']
} satisfies Meta<typeof DetailCardList>

export default meta

const Template = (props: DetailCardListProps) => {
  const {t} = useTranslation()
  const cards = getDetailsCardsTraining(t)
  return <DetailCardList
    cards={cards}
    {...props}/>
}

export const Default = Template.bind({})
Default.args = {
  title: 'Illustration Card List'
}
