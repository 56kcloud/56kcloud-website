import * as humanizeDuration from 'humanize-duration'
import {ClassValue, clsx} from 'clsx'
import {HsformsPayload, HsformsPayloadItem, contactUsFormData} from '../models/contact-us-form-data.model'
import {format} from 'date-fns'
import {twMerge} from 'tailwind-merge'
import slugify from 'slugify'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toQueryParam(string) {
  return slugify(string.toLowerCase())
}

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

export function formatDate(date: string, to = 'dd MMM yyyy') {
  return format(new Date(date), to)
}

export function humanizeSecondsToMinutes(seconds: number) {
  const time = humanizeDuration(seconds * 100000, {largest: 1})
  return time
}

export function padNumberWithZeroes(number, length) {
  let str = number.toString()
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

export function assign(obj: Record<string, any>, fields: Array<string>, value: unknown) {
  const lastKey = fields.pop() || ''
  const lastObj = fields.reduce((obj, key) => 
    obj[key] = obj[key] || {}, 
  obj) 
  lastObj[lastKey] = value
}

export function mergeNestedObject(obj: Record<string, any>, objToMerge: Record<string, any>) {
  Object.keys(objToMerge).map(key => {
    if (typeof obj[key] === 'object' && typeof objToMerge[key] === 'object') {
      mergeNestedObject(obj[key], objToMerge[key])
    } else {
      obj[key] = objToMerge[key]
    }
  })
  return obj
}
