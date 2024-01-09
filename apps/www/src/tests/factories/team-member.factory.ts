import {TeamMember} from '@/models/team-member.model'
import {faker} from '@faker-js/faker'
import {imageFactory} from './image.factory'

export function teamMemberFactory(): TeamMember {
  const name = faker.person.fullName()
  return {
    slug: faker.helpers.slugify(name),
    name,
    role: {
      name: faker.person.jobTitle()
    },
    bio: faker.lorem.paragraph(),
    twitter: faker.internet.url(),
    website: faker.internet.url(),
    avatar: imageFactory({category: 'person'})
  }
}
