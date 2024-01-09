import {IconType, iconNames, iconTypes} from '@/models/icon.model'
import {faker} from '@faker-js/faker'

export type IconFactoryProps = {
  name?: (typeof iconNames)[number]
  type?: (typeof iconTypes)[number]
}

export function iconFactory(props?: IconFactoryProps): IconType {
  return {
    name: props?.name || faker.helpers.arrayElement(iconNames),
    type: props?.type || faker.helpers.arrayElement(iconTypes)
  }
}
