import {solutionSchema} from './solution.model'
import {z} from 'zod'

export type Service = z.infer<typeof solutionSchema>
