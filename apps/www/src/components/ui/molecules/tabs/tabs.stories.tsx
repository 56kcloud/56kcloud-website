import {Tabs, TabsContent, TabsList, TabsTrigger} from './index'
import type {Meta} from '@storybook/react'

const meta = {
  title: 'components/Molecules/Tabs',
  component: Tabs,
  tags: ['autodocs']
} satisfies Meta<typeof Tabs>

export default meta

export const Default = {
  name: 'Default',
  render: () => (
    <Tabs defaultValue='message'>
      <TabsList>
        <TabsTrigger value='message'>Message</TabsTrigger>
        <TabsTrigger value='calendar'>Calendar</TabsTrigger>
      </TabsList>
      <TabsContent value='message'>Message</TabsContent>
      <TabsContent value='calendar'>Calendar</TabsContent>
    </Tabs>
  )
}
