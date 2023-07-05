import {imageSchema} from './image.model'
import {z} from 'zod'

export const companySchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  logo: imageSchema
})
export type Company = z.infer<typeof companySchema>
