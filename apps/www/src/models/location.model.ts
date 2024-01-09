import {z} from 'zod'

const locationSchema = z.object({
  name: z.string(),
  address: z.string(),
  city: z.string(),
  zipCode: z.string(),
  country: z.string(),
  gMap: z.string()
})
export type LocationObject = z.infer<typeof locationSchema>
