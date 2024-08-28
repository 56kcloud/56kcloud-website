import {Solution} from '@/models/solution.model'
import {faker} from '@faker-js/faker'
import {iconFactory} from './icon.factory'
import {imageFactory} from './image.factory'

export function solutionFactory(): Solution {
  return {
    title: faker.lorem.words(3),
    slug: faker.lorem.slug(),
    description: faker.lorem.paragraph(),
    image: imageFactory(),
    icon: iconFactory({type: 'outline'}),
    cta: faker.lorem.words(),
    relatedArticles: [],
    relatedPartners: [],
    relatedServices: [],
    relatedSolutions: []
  }
}
