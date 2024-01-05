import {Service} from '@/models/service.model'
import {solutionFactory} from './solution.factory'

export function serviceFactory(): Service {
  return solutionFactory()
}
