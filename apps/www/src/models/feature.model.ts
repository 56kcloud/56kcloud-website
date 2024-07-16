import {iconSchema} from './icon.model'
import {imageSchema} from './image.model'
import {z} from 'zod'

export const featureSchema = z.object({
  title: z.string(),
  description: z.string(),
  link: z.string().url(),
  cta: z.string()
})

export type FeatureBase = z.infer<typeof featureSchema>

export const featureIconSchema = featureSchema.extend({
  icon: iconSchema
})

export const featureImageSchema = featureSchema.extend({
  image: imageSchema
})

export type Feature<T extends 'icon' | 'image'> = z.infer<
  T extends 'icon' ? typeof featureIconSchema : typeof featureImageSchema
>
