import {imageSchema} from './image.model'
import {z} from 'zod'

export const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: imageSchema,
  link: z.string().url()
})
export type Feature = z.infer<typeof featureSchema>
