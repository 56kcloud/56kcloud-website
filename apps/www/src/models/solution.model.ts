import {articleSchema} from './article.model'
import {iconSchema} from './icon.model'
import {imageSchema} from './image.model'
import {partnerSchema} from './partner.model'
import {z} from 'zod'

export const baseSolutionSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  image: imageSchema,
  icon: iconSchema,
  cta: z.string()
})

export const solutionSchema = baseSolutionSchema.extend({
  relatedPartners: z.array(partnerSchema),
  relatedArticles: z.array(articleSchema),
  relatedSolutions: z.array(baseSolutionSchema),
  relatedServices: z.array(baseSolutionSchema)
})

export type Solution = z.infer<typeof solutionSchema>
