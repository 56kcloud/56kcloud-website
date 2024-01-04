import {imageSchema} from '@/models/image.model'
import {z} from 'zod'

export const contentAlternatePositionWithImageSchema = z.object({
  slug: z.string(),
  image: imageSchema,
  title: z.string(),
  description: z.string(),
  imagePosition: z.enum(['left', 'right'])
})

export type ContentAlternatePositionWithImage = z.infer<typeof contentAlternatePositionWithImageSchema>
