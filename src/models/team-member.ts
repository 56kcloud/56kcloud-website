import {imageSchema} from './image.model'
import {z} from 'zod'

export const teamMemberSchema = z.object({
  name: z.string(),
  role: z.string().optional(),
  bio: z.string().optional(),
  twitter: z.string().optional(),
  website: z.string().optional(),
  avatar: imageSchema
})
export type TeamMember = z.infer<typeof teamMemberSchema>
