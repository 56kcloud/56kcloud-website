import {Customer} from '@/models/customer.model'
import LogoCloudsSimpleWithTitle from '../../logo-clouds/logo-clouds-simple-with-title'

export type CustomerLogosSimpleWithTitleProps = {
  title: string
  customers: Array<Customer>
}

export default function CustomerLogosSimpleWithTitle(props: CustomerLogosSimpleWithTitleProps) { 
  return (
    <LogoCloudsSimpleWithTitle
      title={props.title}
      companies={props.customers}
    />
  )
}
