import {Fetcher} from '@/models/fetcher.model'
export const hubspotAPI = process.env.NEXT_PUBLIC_HUBSPOT_API || ''
export const strapiAPI = process.env.NEXT_PUBLIC_STRAPI_API_URL || ''
export const strapiAPIToken = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN || ''
export const hubspotFetcher = new Fetcher(hubspotAPI)
export const strapiFetcher = new Fetcher(strapiAPI, {headers: {Authorization: `Bearer ${strapiAPIToken}`}})
