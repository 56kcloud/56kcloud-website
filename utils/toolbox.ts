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
