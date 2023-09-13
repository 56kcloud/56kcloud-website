import {TagSchema} from './tag.model'
import {imageSchema} from './image.model'
import {teamMemberSchema} from './team-member'
import {z} from 'zod'

export const articleSchema = z.object({
  id: z.number(),
  title: z.string(),
  slug: z.string(),
  description: z.string(),
  content: z.string(),
  tags: z.array(TagSchema),
  publishedOn: z.string(),
  readTime: z.number(),
  cover: imageSchema,
  author: teamMemberSchema
})

export type Article = z.infer<typeof articleSchema>
