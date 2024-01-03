import {imageSchema} from './image.model'
import {z} from 'zod'

export const modalSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  submitButtonTitle: z.string(),
  image: imageSchema
})
export type ModalProps = z.infer<typeof modalSchema>
