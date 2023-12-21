import {NextResponse} from 'next/server'
import {headers} from './headers'

export function options() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: headers({methods: 'OPTIONS'})
    }
  )
}
