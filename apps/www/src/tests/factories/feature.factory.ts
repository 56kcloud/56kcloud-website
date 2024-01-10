import {Feature} from '@/models/feature.model'
import {faker} from '@faker-js/faker'
import {iconFactory} from './icon.factory'
import {iconNames, iconTypes} from '@/models/icon.model'
import {imageFactory} from './image.factory'

export type FeatureFactoryProps = {
  type: 'icon' | 'image'
  iconType?: (typeof iconTypes)[number]
}

export function featureFactory(props: FeatureFactoryProps): Feature {
  return {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    type: props.type,
    icon: iconFactory(),
    image: imageFactory(),
    link: faker.internet.url()
  }
}
