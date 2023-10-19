import {articleSchema} from './article.model'
import {imageSchema} from './image.model'
import {partnerSchema} from './partner'
import {z} from 'zod'

export const baseSolutionSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  image: imageSchema,
  icon: imageSchema
})

export const solutionSchema = baseSolutionSchema.extend({
  relatedPartners: z.array(partnerSchema),
  relatedArticles: z.array(articleSchema),
  relatedSolutions: z.array(baseSolutionSchema),
  relatedServices: z.array(baseSolutionSchema)
})

export type Solution = z.infer<typeof solutionSchema>
