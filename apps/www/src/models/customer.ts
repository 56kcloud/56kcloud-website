import {partnerSchema} from './partner'
import {z} from 'zod'

export type Customer = z.infer<typeof partnerSchema>
