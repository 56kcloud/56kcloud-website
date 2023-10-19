import {z} from 'zod'

export const imageSchema = z.object({
  name: z.string().optional(),
  alt: z.string().nullable(),
  src: z.string(),
  width: z.number(),
  height: z.number(),
  blurDataURL: z.string().optional()
})

export type ImageProps = z.infer<typeof imageSchema>
