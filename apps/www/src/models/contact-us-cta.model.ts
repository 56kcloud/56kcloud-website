import {modalSchema} from './modal.model'
import {z} from 'zod'

const contactUsCTASchema = z.object({
  title: z.string(),
  modal: modalSchema
})
export type ContactUsCTA = z.infer<typeof contactUsCTASchema>
