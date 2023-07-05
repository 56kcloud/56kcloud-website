import {Fetcher} from '@/models/fetcher.model'

const strapiAPI = process.env.STRAPI_API_URL || ''
const strapiAPIToken = process.env.STRAPI_API_TOKEN || ''
export const hostname = 
  `http${process.env.NEXT_PUBLIC_ENV === 'local' ? '' : 's'}://${process.env.NEXT_PUBLIC_VERCEL_URL}` || ''
export const strapiFetcher = new Fetcher(strapiAPI, {Authorization: `Bearer ${strapiAPIToken}`})
