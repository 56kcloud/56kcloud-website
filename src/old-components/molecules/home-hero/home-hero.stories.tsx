import HomeHero from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Home hero',
  component: HomeHero,
  tags: ['autodocs']
} satisfies Meta<typeof HomeHero>

export default meta

const Template = (props) => {
  const {t} = useTranslation()
  return <HomeHero
    t={t}
    {...props}/>
}
export const Default = Template.bind({})
Default.args = {
}
