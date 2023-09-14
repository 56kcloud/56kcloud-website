import {imageSchema} from './image.model'
import {z} from 'zod'

export const solutionSchema = z.object({
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  image: imageSchema
  // relatedPartners: z.array(teamMemberSchema),
  // relatedArticles: z.array(articleSchema),
  // relatedSolutions: z.array(solutionSchema),
  // relatedServices: z.array(serviceSchema),
})

export type Solution = z.infer<typeof solutionSchema>
