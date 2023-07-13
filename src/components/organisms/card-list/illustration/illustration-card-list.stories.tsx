import {getDarkIllustrationCardsHome, getLightIllustrationCardsHome} from '@/data/illustration-cards'
import IllustrationCardList, {IllustrationCardListProps} from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/Card List/Illustration',
  component: IllustrationCardList,
  tags: ['autodocs']
} satisfies Meta<typeof IllustrationCardList>

export default meta

const Template = (props: IllustrationCardListProps) => {
  const {t} = useTranslation()
  const cards = props.theme === 'light' ? getLightIllustrationCardsHome(t) : getDarkIllustrationCardsHome(t)
  return <IllustrationCardList
    illustrationCards={cards}
    {...props}/>
}

export const Default = Template.bind({})
Default.args = {
  title: 'Illustration Card List',
  description: 'This is an illustration card list'
}

export const Light = Template.bind({})
Light.args = {
  theme: 'light',
  title: 'Illustration Card List',
  description: 'This is an illustration card list'
}
