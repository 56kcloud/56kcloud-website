import {LocationObject} from '@/models/location.model'
import {Meta} from '@storybook/react'
import {faker} from '@faker-js/faker'
import Map from './index'

type MapProps = {
  sionLocation: LocationObject
  winterthurLocation: LocationObject
}

const meta: Meta<typeof Map> = {
  title: 'components/Svgs/Map/Map',
  component: Map,
  tags: ['autodocs'],
  args: {
    sionLocation: {
      name: faker.lorem.word(),
      address: faker.lorem.word(),
      city: faker.lorem.word(),
      zipCode: faker.lorem.word(),
      country: faker.lorem.word(),
      gMap: faker.lorem.word()
    },
    winterthurLocation: {
      name: faker.lorem.word(),
      address: faker.lorem.word(),
      city: faker.lorem.word(),
      zipCode: faker.lorem.word(),
      country: faker.lorem.word(),
      gMap: faker.lorem.word()
    }
  }
} satisfies Meta<typeof Map>

export default meta

export const Default = {
  name: 'Default',
  render: (args: MapProps) => <Map {...args} />
}
