import {imageSchema} from './image.model'
import {z} from 'zod'

export const featureSchema = z.object({
  name: z.string(),
  description: z.string(),
  icon: imageSchema
})
export type Feature = z.infer<typeof featureSchema>
