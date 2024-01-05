import {CardWithIconProps} from '@/models/card.model'
import {faker} from '@faker-js/faker'
import {iconFactory} from './icon.factory'

export function cardWithIconFactory(): CardWithIconProps {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    icon: iconFactory()
  }
}
