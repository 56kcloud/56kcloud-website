import {partnerSchema} from './partner'
import {z} from 'zod'

export type Company = z.infer<typeof partnerSchema>
