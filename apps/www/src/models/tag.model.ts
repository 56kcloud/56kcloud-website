import {z} from 'zod'

export const TagSchema = z.object({
  id: z.string().optional(),
  name: z.string()
})
export type Tag = z.infer<typeof TagSchema>
