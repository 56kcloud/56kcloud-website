// import {Fetcher} from '@/models/fetcher.model'
export const strapiAPI = process.env.STRAPI_API_URL || ''
export const strapiAPIToken = process.env.STRAPI_API_TOKEN || ''
export const hostname = 
  `http${process.env.NEXT_PUBLIC_ENV === 'local' ? '' : 's'}://${process.env.NEXT_PUBLIC_VERCEL_URL}` || ''
