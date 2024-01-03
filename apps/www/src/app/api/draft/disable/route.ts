import {draftMode} from 'next/headers'
import {permanentRedirect} from 'next/navigation'

export async function GET() {
  draftMode().disable()
  return permanentRedirect('/')
}
