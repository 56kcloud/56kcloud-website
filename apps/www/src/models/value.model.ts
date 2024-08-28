import {imageSchema} from './image.model'
import {z} from 'zod'

export const valueSchema = z.object({
  name: z.string(),
  description: z.string(),
  background: imageSchema
})
export type Value = z.infer<typeof valueSchema>
