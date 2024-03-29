import {Fetcher} from '@/models/fetcher.model'

export const nextAPIToken = process.env.NEXT_API_TOKEN || ''
export const strapiAPI = process.env.STRAPI_API_URL || ''
export const strapiAPIToken = process.env.STRAPI_API_TOKEN || ''
export const strapiFetcher = new Fetcher(strapiAPI, {
  headers: {Authorization: `Bearer ${strapiAPIToken}`},
  next: {tags: ['strapi']}
})
export const hostname = process.env.VERCEL_URL
  ? 'https://www.56k.cloud/'
  : `http://localhost:${process.env.PORT || 3000}/`
export const slackBotURL = process.env.SLACK_BOT_URL || ''
