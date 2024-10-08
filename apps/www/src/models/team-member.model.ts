import {imageSchema} from './image.model'
import {z} from 'zod'

export const teamMemberSchema = z.object({
  slug: z.string(),
  name: z.string(),
  role: z
    .object({
      name: z.string()
    })
    .optional(),
  bio: z.string().optional(),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  email: z.string().optional(),
  website: z.string().optional(),
  avatar: imageSchema
})
export type TeamMember = z.infer<typeof teamMemberSchema>
