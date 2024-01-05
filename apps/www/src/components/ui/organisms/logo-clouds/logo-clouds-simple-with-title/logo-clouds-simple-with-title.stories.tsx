import {faker} from '@faker-js/faker'
import {imageFactory} from '@/tests/factories/image.factory'
import LogoCloudsSimpleWithTitle, {LogoCloudsSimpleWithTitleProps} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Organisms/LogoClouds/LogoCloudsSimpleWithTitle',
  component: LogoCloudsSimpleWithTitle,
  tags: ['autodocs'],
  args: {
    title: faker.lorem.sentence(),
    images: Array.from({length: 4}, () => imageFactory({category: 'logo'}))
  }
} satisfies Meta<typeof LogoCloudsSimpleWithTitle>

export default meta

export const Default = {
  name: 'Default',
  render: (args: LogoCloudsSimpleWithTitleProps) => <LogoCloudsSimpleWithTitle {...args} />
}
