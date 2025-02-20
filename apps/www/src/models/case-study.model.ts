import {imageSchema} from './image.model'
import {z} from 'zod'

export const caseStudySchema = z.object({
  id: z.number(),
  slug: z.string(),
  title: z.string(),
  content: z.string(),
  image: imageSchema
})
