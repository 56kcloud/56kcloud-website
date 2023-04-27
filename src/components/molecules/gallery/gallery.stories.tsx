import Gallery from './index'
import useTranslation from 'next-translate/useTranslation'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Gallery',
  component: Gallery,
  tags: ['autodocs']
} satisfies Meta<typeof Gallery>

export default meta

const Template = (props) => {
  const {t} = useTranslation()
  return <Gallery
    t={t}
    {...props}/>
}
export const Default = Template.bind({})
Default.args = {
}
