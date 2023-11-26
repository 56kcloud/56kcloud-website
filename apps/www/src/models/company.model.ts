import {partnerSchema} from './partner.model'
import {z} from 'zod'

export type Company = z.infer<typeof partnerSchema>
