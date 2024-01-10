import {Feature, FeatureBase} from '@/models/feature.model'
import {faker} from '@faker-js/faker'
import {iconFactory} from './icon.factory'
import {iconTypes} from '@/models/icon.model'
import {imageFactory} from './image.factory'

export type FeatureFactoryProps = {
  type: 'icon' | 'image'
  iconType?: (typeof iconTypes)[number]
}

export function featureFactory<T extends 'icon' | 'image'>(props: FeatureFactoryProps): Feature<T> {
  const base: FeatureBase = {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    link: faker.internet.url()
  }

  if (props.type === 'icon') {
    return {
      ...base,
      icon: iconFactory({type: props.iconType ?? iconTypes[0]})
    } as Feature<'icon'>
  } else {
    return {
      ...base,
      image: imageFactory()
    } as Feature<'image'>
  }
}
