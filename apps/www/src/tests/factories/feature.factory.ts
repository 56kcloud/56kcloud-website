import {Feature} from '@/models/feature.model'
import {faker} from '@faker-js/faker'
import {iconNames, iconTypes} from '@/models/icon.model'
import {imageFactory} from './image.factory'

export type FeatureFactoryProps = {
  useImage?: boolean
  type?: (typeof iconTypes)[number]
}

export function featureFactory({type, useImage = false}: FeatureFactoryProps): Feature {
  if (useImage) {
    return {
      title: faker.lorem.sentence(),
      description: faker.lorem.sentence(),
      image: imageFactory(),
      link: faker.internet.url()
    }
  }

  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    icon: {
      name: faker.helpers.arrayElement(iconNames),
      type: type || 'outline'
    },
    link: faker.internet.url()
  }
}
