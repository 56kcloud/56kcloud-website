import {z} from 'zod'

export const valueSchema = z.object({
  name: z.string(),
  description: z.string()
})
export type Value = z.infer<typeof valueSchema>
