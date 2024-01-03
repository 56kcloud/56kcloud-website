import {strapiAPI} from '../../../configs/server'

export type HeaderProps = {
  origin?: string
  methods?: string
  headers?: string
}

export function headers(props: HeaderProps) {
  return {
    'Access-Control-Allow-Origin': props.origin || strapiAPI || '*',
    'Access-Control-Allow-Methods': props.methods || 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': props.headers || 'Content-Type, Authorization'
  }
}
