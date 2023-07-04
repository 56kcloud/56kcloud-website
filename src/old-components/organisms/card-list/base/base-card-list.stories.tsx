import {getBaseCardsPartners} from '@/data/partners'
import BaseCardList, {BaseCardListProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Card List/Base',
  component: BaseCardList,
  tags: ['autodocs']
} satisfies Meta<typeof BaseCardList>

export default meta

const Template = (props: BaseCardListProps) => {
  const cards = getBaseCardsPartners()
  return <BaseCardList
    cards={cards}
    {...props}/>
}

export const Default = Template.bind({})
Default.args = {
  text: 'Base Card List'
}
