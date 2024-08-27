import {Feature, FeatureBase} from '@/models/feature.model'
import {ImageFactoryProps, imageFactory} from './image.factory'
import {faker} from '@faker-js/faker'
import {iconFactory} from './icon.factory'
import {iconNames, iconTypes} from '@/models/icon.model'

export type FeatureFactoryProps<T> = T extends 'icon'
  ? {
      iconType: (typeof iconTypes)[number]
      iconName?: (typeof iconNames)[number]
      imageProps?: never
    }
  : {
      iconType?: never
      iconName?: never
      imageProps: ImageFactoryProps
    }

export function featureFactory<T extends 'icon' | 'image'>(props: FeatureFactoryProps<T>): Feature<T> {
  const base: FeatureBase = {
    title: faker.lorem.sentence(),
    description: faker.lorem.sentence(),
    link: faker.internet.url(),
    cta: faker.lorem.words()
  }

  if (props.iconType) {
    return {
      ...base,
      icon: iconFactory({type: props.iconType, name: props.iconName})
    }
  } else {
    return {
      ...base,
      image: imageFactory(props.imageProps)
    }
  }
}
