import {z} from 'zod'

export const benefitSchema = z.object({
  name: z.string()
})
export type Benefit = z.infer<typeof benefitSchema>
