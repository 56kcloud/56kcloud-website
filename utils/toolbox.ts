// HubSpot Form //
import {HsformsPayload, HsformsPayloadItem, contactUsFormData} from '../models/contact-us-form-data.model'

export function createHsformsPayload(data) {
  const legalConsent = data.legalConsent
  delete data.legalConsent
  return {
    fields: formatFormDataToHsforms(data),
    legalConsentOptions:{
      consent:{
        consentToProcess: true,
        text:'Text that gives consent to process',
        communications:[
          {
            value: legalConsent,
            subscriptionTypeId: 9310596,
            text:'I agree to receive additional communications from 56K.Cloud GmbH'
          }
        ]
      }
    }
  } as HsformsPayload
}

export function formatFormDataToHsforms(data: contactUsFormData) {
  return Object.keys(data).map(key => ({
    name: key, 
    value: data[key]
  } as HsformsPayloadItem))
}

// Blog Posts Date //
import * as humanizeDuration from 'humanize-duration'
import {format} from 'date-fns'

export function publishedPostDate(publishedPostAt: string, publishedPostAtStart: string) {
  const date = format(new Date(publishedPostAt && publishedPostAtStart ), 'dd MMM yyyy')
  return date
}

export function humanizeSecondsToMinutes(seconds: number) {
  const time = humanizeDuration(seconds * 100000, {largest: 1})
  return time
}

