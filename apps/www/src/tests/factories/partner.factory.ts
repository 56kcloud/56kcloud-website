import {Partner} from '@/models/partner.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from './image.factory'

export default function partnerFactory(): Partner {
  return {
    id: faker.number.int(),
    name: faker.company.name(),
    link: faker.internet.url(),
    image: imageFactory({category: 'logo'})
  }
}
