import {imageSchema} from './image.model'
import {z} from 'zod'

export const partnerSchema = z.object({
  id: z.number(),
  name: z.string(),
  url: z.string(),
  logo: imageSchema
})
export type Partner = z.infer<typeof partnerSchema>
