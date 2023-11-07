import {iconSchema} from './icon.model'
import {z} from 'zod'

export const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  icon: iconSchema,
  link: z.string().url()
})
export type Feature = z.infer<typeof featureSchema>
