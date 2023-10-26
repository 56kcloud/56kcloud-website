import {ClassValue, clsx} from 'clsx'
import {HsformsPayload, HsformsPayloadItem, contactUsFormData} from '@/models/contact-us-form-data.model'
import {format} from 'date-fns'
import {twMerge} from 'tailwind-merge'
import humanizeDuration from 'humanize-duration'
import slugify from 'slugify'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toQueryParam(string: string) {
  return slugify(string.toLowerCase())
}

export function createHsformsPayload(data: contactUsFormData) {
  const legalConsent = data.legalConsent
  delete data.legalConsent
  return {
    fields: formatFormDataToHsforms(data),
    legalConsentOptions: {
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
    value: data[key as keyof contactUsFormData]
  } as HsformsPayloadItem))
}

export function formatDate(date: string, to = 'dd MMM yyyy') {
  return format(new Date(date), to)
}

export function humanizeSecondsToMinutes(seconds: number) {
  const time = humanizeDuration(seconds * 100000, {largest: 1})
  return time
}

export function padNumberWithZeroes(number: number, length: number) {
  let str = number.toString()
  while (str.length < length) {
    str = '0' + str
  }
  return str
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function assign(obj: Record<string, any>, fields: Array<string>, value: unknown) {
  const lastKey = fields.pop() || ''
  const lastObj = fields.reduce((obj, key) => 
    obj[key] = obj[key] || {}, 
  obj) 
  lastObj[lastKey] = value
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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

export const deepFind = (object: Record<string, unknown>, path: string) => {
  const paths = path.split('.')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let current: any = object
  let i
  for (i = 0; i < paths.length; ++i) {
    if (!current || current[paths[i]] === undefined) {
      return undefined
    } else {
      current = current[paths[i]]
    }
  }
  return current
}

export function snakeCaseToCamelCase(str: string) {
  return str.replace(/([-_][a-z])/g, $1 => $1.toUpperCase().replace('-', '').replace('_', ''))
}

export function snakeCaseObjectKeysToCamelCase(snakeCaseObject: Record<string, unknown>) {
  if (snakeCaseObject == null) {
    return snakeCaseObject
  }

  Object.keys(snakeCaseObject).forEach(key => {
    const camelCaseKey = snakeCaseToCamelCase(key)
    if (camelCaseKey !== key) {
      snakeCaseObject[camelCaseKey] = snakeCaseObject[key]
      delete snakeCaseObject[key]
    }
    if (typeof snakeCaseObject[camelCaseKey] === 'object') {
      snakeCaseObject[camelCaseKey] = 
        snakeCaseObjectKeysToCamelCase(snakeCaseObject[camelCaseKey] as Record<string, unknown>)
    }
  })
  return snakeCaseObject
}

export function convertRelativeURLToAbsoluteURL(url: string, host: string) {
  return url.startsWith('/') ? `https://${host}${url}` : url
}

export function addAbsoluteURLsInObject(object: Record<string, unknown>, keys: Array<string>, host: string) {
  keys.forEach((key) => {
    if (key !== undefined && Object.hasOwn(object, key)) {
      if (Array.isArray(object[key])) {
        const array = object[key] as Array<Record<string, unknown>>
        array.map((_, index) => {
          array[index]['url'] = convertRelativeURLToAbsoluteURL(
            array[index]['url'] as string,
            host
          )
        })
      } else {
        object[key] = convertRelativeURLToAbsoluteURL(object[key] as string, host)
      }
    }
  })
}
