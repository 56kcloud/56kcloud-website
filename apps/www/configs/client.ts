import {Fetcher} from '@/models/fetcher.model'
export const hubspotAPI = process.env.NEXT_PUBLIC_HUBSPOT_API || ''
export const hubspotFetcher = new Fetcher(hubspotAPI)
