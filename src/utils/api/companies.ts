import {companySchema} from '@/models/company.model'
import {strapiFetcher} from '../../../config'

export async function getCompanyListProps(lang: string) {
  const res = await strapiFetcher.call(
    {path: `/api/company-list/?populate[companies][populate]=*&locale=${lang}`, method: 'GET'}
  )
  const title = res.data.attributes.title
  const list = res.data.attributes.companies.data.map(company => ({
    id: company.id,
    name: company.attributes.name,
    url: company.attributes.url,
    logo: {
      name: company.attributes.logo.name,
      alt: company.attributes.logo.data.attributes.alternativeText,
      src: new URL(company.attributes.logo.data.attributes.url, strapiFetcher.baseUrl).href,
      width: company.attributes.logo.data.attributes.width,
      height: company.attributes.logo.data.attributes.height
    }
  }))
  return {
    title,
    companies: companySchema.array().parse(list)
  }
}
