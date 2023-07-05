import {z} from 'zod'

export const imageSchema = z.object({
  name: z.string().optional(),
  alt: z.string().nullable(),
  src: z.string(),
  width: z.number(),
  height: z.number()
})
export type Image = z.infer<typeof imageSchema>
