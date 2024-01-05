import {Feature} from '@/models/feature.model'
import {faker} from '@faker-js/faker'
import {iconNames, iconTypes} from '@/models/icon.model'

export type FeatureFactoryProps = {
  type: (typeof iconTypes)[number]
}

export function featureFactory({type}: FeatureFactoryProps): Feature {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.paragraph(),
    icon: {
      name: faker.helpers.arrayElement(iconNames),
      type: type || 'outline'
    },
    link: faker.internet.url()
  }
}
