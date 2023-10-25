import {iconSchema} from './icon.model'
import {z} from 'zod'

export const cardSchema = z.object({
  title: z.string(),
  description: z.string()
})
export type Card = z.infer<typeof cardSchema>

export const cardWithIconSchema = cardSchema.extend({
  icon: iconSchema
})
export type CardWithIcon = z.infer<typeof cardWithIconSchema>
