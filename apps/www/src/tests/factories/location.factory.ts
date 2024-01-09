import {LocationObject} from '@/models/location.model'
import {faker} from '@faker-js/faker'

export function locationFactory(): LocationObject {
  return {
    name: faker.lorem.word(),
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    zipCode: faker.location.zipCode(),
    country: faker.location.country(),
    gMap: faker.internet.url()
  }
}
