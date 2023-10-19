import {solutionSchema} from './solution.model'
import {z} from 'zod'

export const serviceSchema = solutionSchema

export type Service = z.infer<typeof serviceSchema>
