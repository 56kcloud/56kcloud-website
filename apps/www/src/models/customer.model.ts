import {partnerSchema} from './partner.model'
import {z} from 'zod'

export type Customer = z.infer<typeof partnerSchema>
