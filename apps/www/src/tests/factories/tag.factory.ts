import {Tag} from '@/models/tag.model'
import {faker} from '@faker-js/faker'

export function tagFactory(props?: Partial<Tag>): Tag {
  return {
    id: props?.id || faker.string.uuid(),
    name: props?.name || faker.lorem.word()
  }
}
