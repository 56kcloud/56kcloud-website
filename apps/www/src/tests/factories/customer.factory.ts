import {Customer} from '@/models/customer.model'
import partnerFactory from './partner.factory'

export default function CustomerFactory(): Customer {
  return partnerFactory()
}
