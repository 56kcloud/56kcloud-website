import {Company} from '@/models/company.model'
import partnerFactory from './partner.factory'

export default function companyFactory(): Company {
  return partnerFactory()
}
