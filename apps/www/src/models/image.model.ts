import {z} from 'zod'

export const imageSchema = z.object({
  id: z.number(),
  name: z.string(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  alternateText: z.string().nullable(),
  caption: z.string().nullable(),
  height: z.number(),
  width: z.number(),
  url: z.string(),
  folderPath: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  previewUrl: z.string().optional(),
  provider: z.string(),
  providerMetadata: z.string().optional(),
  placeholder: z.string()
})

export type ImageProps = z.infer<typeof imageSchema>
